import { HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { HomeScreen } from "./HomeScreen"
import { Navbar } from "./Navbar";
import { UserScreen } from "./UserScreen"

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/user" component={UserScreen}/>
                <Route exact path="/" component={HomeScreen}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}
