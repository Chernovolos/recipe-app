import React from "react";
import { Switch, Route} from "react-router";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import Header from "./Header";
import RecipePage from "./RecipePage";


class Layout extends React.Component {

    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/recipe-page" component={RecipePage}/>
                </Switch>
            </>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(Layout);