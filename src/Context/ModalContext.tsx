import {useState, useEffect, createContext, ReactNode} from "react";
import {ModalProps} from "../Components/Layout/Modal/Modal";

interface ModalContextProps {
    modalOpen: boolean,
    setModalOpen: (open: boolean) => void
    modalData: ModalProps
    setModalData: (data: ModalProps) => void
}

const ModalContext = createContext<ModalContextProps>({
    modalOpen: true,
    setModalOpen: () => {},
    modalData: { title: "", description: "" },
    setModalData: () => {}
})
export default ModalContext

interface ModalProviderProps {
    children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalData, setModalData] = useState<ModalProps>({title: "", description: ""})

    return (
        <ModalContext.Provider value={{ modalOpen, setModalOpen, modalData, setModalData }}>
            {children}
        </ModalContext.Provider>
    )
}