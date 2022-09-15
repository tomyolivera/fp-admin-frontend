import {ReactNode} from "react";

interface DropdownProps {
    children: ReactNode
}

const Dropdown = ({children}: DropdownProps) => {
    return (
        <>
            {children}
        </>
    )
}

export default Dropdown