import { useContext } from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/aerolab-logo.svg";
import coin from "../assets/icons/coin.svg";
import { UserContext } from "../contexts/userContext/UserContext";

export const Navbar = () => {

    const history = useHistory();
    
    const toUserScreen = () => {
        history.push("/user")
    }

    const toHomeScreen = () => {
        history.push("/")
    }

    const {user, addPoint, loadComplete} = useContext(UserContext);

    const {name, points} = user;

    if(!loadComplete){
        return <div></div>
    }

    return (
        <nav className="navbar">
            <img src={logo} alt="aerolab-logo" onClick={toHomeScreen}/>
            <section className="navbar__section">
                <p className="navbar__section__user" onClick={toUserScreen} title="history">{name}</p>
                <div className="navbar__section__points" onClick={addPoint} title="Add 1000 points">
                    <p>{points}</p>
                    <img src={coin} alt="coin-icon"/>
                </div>
            </section>
        </nav>
    )
}
