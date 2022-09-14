import {InputHTMLAttributes} from "react"
import {Field, FieldArray} from 'formik'
import Button from "./Button";
import {FaMinus, FaPlus} from "react-icons/all"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Input = ({ label, ...props }: InputProps) => {
    const type = props.name === "password" ? "password" : "text"

    return (
        <div>
            <label htmlFor={props.name} className="text-sm font-medium text-gray-700">
                { label.toUpperCase() }
            </label>
            <Field
                id={props.name}
                autoComplete="off"
                className={`input`}
                type={type}
                {...props}
            />
        </div>
    )
}

export default Input