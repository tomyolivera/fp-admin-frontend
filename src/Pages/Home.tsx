import {useContext} from "react"
import UserContext from '../Context/UserContext'

const Home = () => {
    const { isAuthenticated } = useContext(UserContext)

    return (
        <div>
            <h1>Home</h1>
            {
                isAuthenticated ? <h1>Authenticated</h1> : <h1>Not Authenticated</h1>
            }
        </div>
    )
}

export default Home