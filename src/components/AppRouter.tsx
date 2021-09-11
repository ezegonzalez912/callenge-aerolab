import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { HomeScreen } from "./HomeScreen"
import { Navbar } from "./Navbar";
import { UserScreen } from "./UserScreen"

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="callenge-aerolab/user" component={UserScreen}/>
                <Route exact path="/callenge-aerolab/" component={HomeScreen}/>
                <Redirect to="/callenge-aerolab/"/>
            </Switch>
        </Router>
    )
}
