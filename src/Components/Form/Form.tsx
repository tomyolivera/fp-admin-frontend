import { Formik, Form as FormikForm } from "formik"
import classNames from "classnames"

import Button from "./Button"
import Input from "./Input"

interface FormProps {
    initialValues: object
    onSubmit: (values: any) => Promise<void>
}

const Form = ({ initialValues, onSubmit }: FormProps) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true)
                await onSubmit(values)
                // setSubmitting(false)
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

                    <Button className={classNames("bg-indigo-500 hover:bg-indigo-700")}>
                        { isSubmitting ? "Loading..." : "Login" }
                    </Button>
                </FormikForm>
            )}
        </Formik>
    )
}

export default Form