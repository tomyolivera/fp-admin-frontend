import { Link } from 'react-router-dom'
import classNames from 'classnames'

type TColor = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' |
'red' | 'orange' | 'amber' | 'yellow' |
'lime' | 'green' | 'emerald' | 'teal' |
'cyan' | 'sky' | 'blue' |
'indigo' | 'purple' | 'fuchsia' | 'pink' | 'rose'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    href?: string
}

const Button = ({ children, href, className }: ButtonProps) => {
    if(href) {
        return (
            <Link
                to={href}
                className={classNames(`
                    flex px-4 py-2 rounded-md shadow-sm
                    text-base font-medium
                    border border-transparent
                    text-white
                `) + className}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            className={classNames(`
                flex justify-center w-100 px-4 py-2 rounded-md shadow-sm
                text-base font-medium
                border border-transparent
                text-white
            `) + className}
        >
            { children }
        </button>
    )
}

export default Button