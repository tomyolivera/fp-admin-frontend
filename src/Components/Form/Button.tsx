import {ButtonHTMLAttributes, ReactNode} from "react";
import {Link, useNavigate} from 'react-router-dom'
import classNames from 'classnames'

type TColor = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' |
'red' | 'orange' | 'amber' | 'yellow' |
'lime' | 'green' | 'emerald' | 'teal' |
'cyan' | 'sky' | 'blue' |
'indigo' | 'purple' | 'fuchsia' | 'pink' | 'rose'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    href?: string
}

const Button = ({ children, href, ...props }: ButtonProps) => {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate(href || "")}
            {...props}
            className={classNames(`
                px-4 py-2 rounded-md shadow-sm
                text-base font-medium
                border border-transparent
            `) + props.className}
        >
            { children }
        </button>
    )
}

export default Button