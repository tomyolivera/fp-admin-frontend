import Form from "../Components/Form/Form"

interface ILogin {
    email: string
    password: string
}

const Login = () => {
    const initialValues: ILogin = {
        email: "",
        password: ""
    }

    const handleSubmit = async ({email, password}: ILogin) => {
        console.log(email, password)
    }

    return (
        <div className="w-100 container">
            <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default Login