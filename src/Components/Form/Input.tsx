import {InputHTMLAttributes} from "react"
import {Field, FieldArray} from 'formik'
import Button from "./Button";
import {FaMinus, FaPlus} from "react-icons/all"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
    arr?: any[]
}

const InputForm = ({ name, label, ...props }: InputProps) => (
    <div>
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
            { label.toUpperCase() }
        </label>
        <Field
            id={name}
            name={name}
            autoComplete="off"
            className={`input`}
            {...props}
        />
    </div>
)

const Input = ({ name, label, type, arr, ...props }: InputProps) => {
    if(name.endsWith("s")) return (
        <FieldArray name={name}>
            {({ push, remove }) => (
                <div>
                    {arr && arr.length >= 0 && arr.map((value: any, index: number) => (
                            <div key={index}>
                                <InputForm label={label} name={`${name}.${index}`} type={type} />
                                {
                                    index > 0 && <Button className={"btn-red mt-2"} type="button" onClick={() => remove(index)}>
                                        <FaMinus />
                                    </Button>
                                }
                            </div>
                        ))
                    }
                    <Button className={"btn-green my-2"} type="button" onClick={() => push("")}>
                        <FaPlus />
                    </Button>
                </div>
            )}
        </FieldArray>
    )

    return (
        <>
            <InputForm label={label} name={name} type={type} {...props} />
        </>
    )
}

export default Input