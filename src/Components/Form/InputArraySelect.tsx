import {Field, FieldArray} from "formik";
import {FaMinus, FaPlus} from "react-icons/all"
import {IProductCategory} from "../../Interfaces/IProduct"
import Button from "./Button"

interface InputArraySelectProps {
    name: string
    sp_name: string
    label: string
    element: any[]
    value: any[]
}

const InputArraySelect = ({ name, sp_name, label, element, value }: InputArraySelectProps) => {
    return (
        <>
            <label htmlFor={name} className={"text-sm font-medium text-gray-700"}>{label.toUpperCase()}</label>
            <FieldArray name={name}>
                {({ push, remove }) => (
                    <div>
                        {value.map((category: IProductCategory, index: number) => (
                            <div key={index} className={`${index > 0 ? "flex flex-row gap-2" : ""}`}>
                                <Field name={`${name}.${index}`} as={"select"} className={"my-2 input"}>
                                    <option value={""}>Seleccionar {sp_name}</option>
                                    {
                                        element.map(({name, id}: any) => (
                                            <option key={id} value={id}>{name}</option>
                                        ))
                                    }
                                </Field>
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

export default InputArraySelect