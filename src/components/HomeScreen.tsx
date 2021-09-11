import { useContext } from 'react';
import { UserContext } from '../contexts/userContext/UserContext';
import { Header } from './Header'
import { ProductSection } from './productsSection/ProductSection'

export const HomeScreen = () => {

    const {loadComplete} = useContext(UserContext);

    if(!loadComplete){
        return <div className="loader">Loading...</div>
    }

    return (
        <main className="Content">
            <Header />
            <ProductSection />
        </main>
    )
}
