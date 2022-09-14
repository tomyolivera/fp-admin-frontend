import { Formik, Form as FormikForm } from "formik"
import classNames from "classnames"

import Button from "./Button"
import Input from "./Input"
import {ReactNode} from "react";

interface FormProps {
    initialValues: object
    onSubmit: (values: any) => Promise<void>
    buttonLabel: string
    buttonVolverHref?: string
}

const FastForm = ({ initialValues, onSubmit, buttonLabel, buttonVolverHref }: FormProps) => {
    return (
        <>
            { buttonVolverHref && <Button className={"btn-gray mb-5"} href={buttonVolverHref}>Volver</Button> }

            <Formik
                initialValues={initialValues}
                onSubmit={async (values, {setSubmitting}) => {
                    setSubmitting(true)
                    await onSubmit(values)
                }}
            >
                {({ values, isSubmitting }) => (
                    <FormikForm className="flex flex-col gap-y-2">
                        <>
                            {
                                Object.values(values).map((value, i) => (
                                    <Input
                                        label={Object.keys(values)[i]}
                                        key={i}
                                        name={Object.keys(values)[i]}
                                    />
                                ))
                            }
                            <Button type={"submit"} className={"btn-indigo-compact"} disabled={isSubmitting} >
                                { isSubmitting ? "Cargando..." : buttonLabel }
                            </Button>
                        </>
                    </FormikForm>
                )}
            </Formik>
        </>
    )
}

export default FastForm