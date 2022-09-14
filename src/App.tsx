import React from "react"
import AppRouter from "./AppRouter"

import { UserProvider } from "./Context/UserContext"
import {SidebarProvider} from "./Context/SidebarContext"
import {ModalProvider} from "./Context/ModalContext"

import Header from "./Components/Layout/Header/Header"
import Sidebar from "./Components/Layout/Sidebar/Sidebar"
import {ProductProvider} from "./Context/ProductContext";

const App = () => {
    return (
        <UserProvider>
            <SidebarProvider>
                <ModalProvider>
                    <ProductProvider>
                        <div className={"flex"}>
                            <Sidebar />
                            <div className={"w-full"}>
                                <Header />
                                <div className={"px-10 mx-auto mt-5"}>
                                    <AppRouter />
                                </div>
                            </div>
                        </div>
                    </ProductProvider>
                </ModalProvider>
            </SidebarProvider>
        </UserProvider>
    )
}

export default App