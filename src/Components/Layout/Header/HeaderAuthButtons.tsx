import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import UserContext from "../../../Context/UserContext";
import Button from "../../Form/Button"

const HeaderAuthButtons = () => {
    const navigate = useNavigate()
    const { isAuthenticated, setToken } = useContext(UserContext)

    const handleLogout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    return (
        <div className="flex gap-2">
            {
                isAuthenticated
                    ? <Button onClick={handleLogout} className="button-red">
                        Cerrar Sesión
                    </Button>
                    : <Button href="login" className="button-indigo">
                        Iniciar Sesión
                    </Button>
            }
        </div>
    )
}

export default HeaderAuthButtons