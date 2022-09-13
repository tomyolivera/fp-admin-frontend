import {InputHTMLAttributes} from "react"
import {Field, FieldArray} from 'formik'
import Button from "./Button";
import {FaMinus, FaPlus} from "react-icons/all";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    arr?: Array<any>
}

const InputForm = ({ name, ...props }: InputProps) => (
    <>
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
            { name.toUpperCase() }
        </label>
        <Field
            id={name}
            name={name}
            autoComplete="off"
            className={`
                appearance-none block rounded w-full py-3 px-4 leading-tight
                border border-gray-200
                bg-gray-200 text-gray-700
                focus:bg-white focus:border-gray-500 focus:outline-none
            `}
            {...props}
        />
    </>
)

const Input = ({ name, type, arr, ...props }: InputProps) => {
    const intelligentType = name.includes('password')
                                ? 'password'
                                : name.includes('email')
                                    ? 'email'
                                    : name.includes('price') || name.includes('id')
                                        ? 'number'
                                        : type

    if(name.endsWith("s")) return (
        <FieldArray name={name}>
            {({ push, remove }) => (
                <div>
                    {arr && arr.length >= 0 && arr.map((value: any, index: number) => (
                            <div key={index}>
                                <InputForm name={`${name}.${index}`} type={intelligentType} />
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
            <InputForm name={name} type={intelligentType} />
        </>
    )
}

export default Input