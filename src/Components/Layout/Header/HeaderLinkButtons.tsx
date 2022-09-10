import Button from "../../Form/Button"

const HeaderLinkButtons = () => {
    return (
        <div className="flex gap-2">
            <Button href="/products" className="bg-green-300 hover:bg-green-500 text-green-900">
                Products
            </Button>
        </div>
    )
}

export default HeaderLinkButtons