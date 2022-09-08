import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Layout/Header/Header"

import Home from "./Pages/Home"
import Login from "./Pages/Login"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter