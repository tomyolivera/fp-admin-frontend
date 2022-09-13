import {Field, FieldArray} from "formik"
import {FaMinus, FaPlus} from "react-icons/all"
import {InputProps} from "./Input"
import Button from "./Button"

interface InputArrayProps extends InputProps {
    arr?: any[]
}

const InputArray = ({ arr, name, ...props }: InputArrayProps) => {
    return (
        <>
            <FieldArray name={name}>
                {({ push, remove }) => (
                    <div>
                        {arr && arr.length >= 0 && arr.map((value: any, index: number) => (
                                <div key={index}>

                                    <div className={"flex gap-2"}>
                                        <div>
                                            <label htmlFor={name} className="text-sm font-medium text-gray-700">
                                                { name.toUpperCase() }
                                            </label>
                                            <Field id={name} name={name} className={`input`} {...props} />
                                        </div>

                                        {
                                            index > 0 &&
                                            <Button className={"btn-red mt-2"} type="button" onClick={() => remove(index)}>
                                                <FaMinus />
                                            </Button>
                                        }
                                    </div>
                                </div>
                            ))
                        }
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