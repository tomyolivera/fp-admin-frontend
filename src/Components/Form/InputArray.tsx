import {Field, FieldArray} from "formik"
import {FaMinus, FaPlus} from "react-icons/all"
import Button from "./Button"

interface InputArraySelectProps {
    name: string
    label: string
    value: any[]
}

const InputArray = ({ name, label, value }: InputArraySelectProps) => {
    return (
        <>
            <label htmlFor={name} className={"text-sm font-medium text-gray-700"}>{label.toUpperCase()}</label>
            <FieldArray name={name}>
                {({ push, remove }) => (
                    <div>
                        {value.map((element: any, index: number) => (
                            <div key={index} className={`${index > 0 ? "flex flex-row gap-2" : ""}`}>
                                <Field name={`${name}.${index}`}className={"my-2 input"} />
                                {
                                    index > 0 && <Button className={"btn-red self-center"} type="button" onClick={() => remove(index)}>
                                        <FaMinus />
                                    </Button>
                                }
                            </div>
                        ))}

                        <Button className={"btn-green my-2"} type="button" onClick={() => push("")}>
                            <FaPlus />
                        </Button>
                    </div>
                )}
            </FieldArray>
        </>
    )
}

export default InputArray