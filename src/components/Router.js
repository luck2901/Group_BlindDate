import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Register from "../routes/Register";

const AppRouter = ({isLoggedIn}) =>{
    return (
        <Router>
            <Switch>
                {isLoggedIn ? ( //Log In : true
                    <>
                    <Route exact path="/">
                        <Home/>
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