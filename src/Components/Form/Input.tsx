import { Field } from 'formik'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string
}

const Input = ({ name, type, placeholder, className }: InputProps) => {
    const intelligentType = name.includes('password')
                                ? 'password'
                                : name.includes('email')
                                    ? 'email'
                                    : name.includes('price') || name.includes('id')
                                        ? 'number'
                                        : type

    return (
        <>
            <label htmlFor={name} className="text-sm font-medium text-gray-700">
                { name.toUpperCase() }
            </label>
            <Field
                id={name}
                name={name}
                type={intelligentType}
                placeholder={placeholder}
                autoComplete="off"
                className={`
                    appearance-none block rounded w-full py-3 px-4 leading-tight
                    border border-gray-200
                    bg-gray-200 text-gray-700
                    focus:bg-white focus:border-gray-500 focus:outline-none
                `}
            />
        </>
    )
}

export default Input