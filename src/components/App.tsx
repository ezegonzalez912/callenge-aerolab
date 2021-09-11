import { ProdcutsProvider } from "../contexts/productsContext/ProductsContext"
import {  UserProvider } from "../contexts/userContext/UserContext"
import { AppRouter } from "./AppRouter"

export const App = () => {
    return (
        <UserProvider>
            <ProdcutsProvider>
                <div className="App">
                    <AppRouter />
                </div>
            </ProdcutsProvider>
        </UserProvider>
    )
}
