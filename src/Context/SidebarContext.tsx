import {useState, useEffect, createContext, ReactNode} from "react";
import {useLocation} from "react-router-dom";

interface SidebarContextProps {
    sidebarOpen: boolean,
    setSidebarOpen: (open: boolean) => void
    _location: string
    setLocation: (change: string) => void
}

const SidebarContext = createContext<SidebarContextProps>({
    sidebarOpen: true,
    setSidebarOpen: () => {},
    _location: "",
    setLocation: () => {}
})
export default SidebarContext

interface SidebarProviderProps {
    children: ReactNode
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
    const location = useLocation()
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [_location, setLocation] = useState(location.pathname)

    useEffect(() => {
        setLocation(location.pathname)
    }, [location])

    return (
        <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen, _location, setLocation }}>
            {children}
        </SidebarContext.Provider>
    )
}