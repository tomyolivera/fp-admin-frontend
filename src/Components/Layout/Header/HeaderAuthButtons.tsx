import Button from "../../Form/Button"

const HeaderAuthButtons = () => {
    return (
        <div className="flex gap-2">
            <Button href="/register" className="bg-green-100 hover:bg-green-300 text-green-800">
                Sign In
            </Button>

            <Button href="login" className="bg-indigo-500 hover:bg-indigo-700">
                Sign Up
            </Button>
        </div>
    )
}

export default HeaderAuthButtons