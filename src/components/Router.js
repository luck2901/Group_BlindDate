import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Register from "../routes/Register";
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn, userObject}) =>{
    return (
        <Router>
            {isLoggedIn && <Navigation/>}
            <Switch>
                {isLoggedIn ? ( //Log In : true
                    <>
                    <Route exact path="/">
                        <Home userObject={userObject}/>
                    </Route>
                    <Route exact path="/profile">
                        <Profile/>
                    </Route>
                    </>
                ) : ( //Log In : false
                    <> 
                    <Route exact path="/">
                        <Auth/>
                    </Route>
                    <Route exact path="/Register">
                        <Register />
                    </Route>
                    <Redirect from="*" to="/"/>
                    </>
                )}
            </Switch>
        </Router>
    );
}

export default AppRouter;