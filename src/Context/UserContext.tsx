import {useState, useEffect, createContext, ReactNode} from "react";

interface UserContextProps {
    user: any
    token: string
    setToken: (token: string) => void
    isAuthenticated: boolean
}

const UserContext = createContext<UserContextProps>({
    user: null,
    token: "",
    setToken: () => {},
    isAuthenticated: false
})
export default UserContext

interface UserProviderProps {
    children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState<string>(localStorage.getItem("token") || "")
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        if (token.length > 0) setIsAuthenticated(true)
        else setIsAuthenticated(false)
    }, [token])

    return (
        <UserContext.Provider value={{ user, token, setToken, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    )
}