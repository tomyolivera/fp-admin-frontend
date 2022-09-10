import { Formik, Form as FormikForm } from "formik"
import classNames from "classnames"

import Button from "./Button"
import Input from "./Input"

interface FormProps {
    initialValues: object
    onSubmit: (values: any) => Promise<void>
    buttonLabel: string
}

const Form = ({ initialValues, onSubmit, buttonLabel }: FormProps) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true)
                await onSubmit(values)
            }}
        >
            {({ isSubmitting }) => (
                <FormikForm className="flex flex-col gap-y-2">
                    {
                        Object.values(initialValues).map((value, i) => (                            
                            <Input
                                key={i}
                                name={Object.keys(initialValues)[i]}
                            />
                        ))
                    }

                    <Button className={"button-indigo"} disabled={isSubmitting} >
                        { isSubmitting ? "Cargando..." : buttonLabel }
                    </Button>
                </FormikForm>
            )}
        </Formik>
    )
}

export default Form