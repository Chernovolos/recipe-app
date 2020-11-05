import React from "react";
import { connect } from "react-redux";
import {
    filterRecipes,
    changePage,
    getChangeNumber,
    changeRecipeSearch,
    getRecipes
} from "../actions/recipeActions";

import Preloader from "./Preloader";
import Recipe from "./Recipe";
import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import RecipePagination from "./RecipePagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

class MainPage extends React.Component {

    componentDidMount() {
        this.props.initialize({number: this.props.number, page: this.props.page, querySearch: this.props.querySearch});
    }

    handleSearch = ({target}) => {
        this.props.changeRecipeSearch(target.value);
    };

    handleNumber = ({target}) => {
        this.props.changeNumber(target.value);
        console.log("SOMEONE WANT TO CHANGE NUMBER TO - ", target.value);
    };

    handlePage = ({target}) => {
        this.props.changePage(target.value);
        console.log("SOMEONE WANT TO CHANGE NUMBER TO - ", target.value);
    };


    handleUpdateSearch = () => {
        this.props.initialize({number: this.props.number, page: this.props.page, querySearch: this.props.querySearch});
    };

    handleClearSearch = () => {
        this.props.changeRecipeSearch("");
        console.log("number:", this.props.number);
        this.props.initialize({number: this.props.number, page: this.props.page, querySearch: ""});
    };

    render() {
        let { recipes, querySearch, preloader, error, page, number } = this.props;

        return(
            <Container>
                <section>
                    <Row>
                        <RecipePagination
                            page={page}
                            number={number}
                            total={50}
                            handleNumber={this.handleNumber}
                            handlePage={this.handlePage}
                        />
                        <Col>
                            <InputGroup sm={3}>
                                <FormControl
                                    placeholder="Enter the name of the recipe"
                                    value={querySearch}
                                    onChange={this.handleSearch}
                                    className="outline-info"
                                />
                                <span className={querySearch.length ? "icon-times-circle" : "icon-times-circle hidden"}>
                                    <FontAwesomeIcon
                                        onClick={this.handleClearSearch}
                                        icon={faTimesCircle}
                                        className="main-search-icon"/>
                                </span>
                                <InputGroup.Append>
                                    <Button  onClick={this.handleUpdateSearch} size="sm" variant="outline-info">
                                        <FontAwesomeIcon icon={faSearch} className="main-search-icon"/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row>
                        <h1>{error}</h1>
                        <Preloader show={preloader}/>
                    </Row>
                    <Row>
                        {
                            recipes.map((recipe, index) => {
                                // console.log("RECIPE-MAP", recipe);
                                return (
                                    <Recipe
                                        key={index}
                                        {...recipe}
                                    />
                                );
                            })
                        }
                    </Row>
                </section>
            </Container>
        );
    }
}

export default connect(
    state => ({
        recipes: state.mainPage.recipes,
        preloader: state.mainPage.preloader,
        error: state.mainPage.error,
        number: state.mainPage.number,
        page: state.mainPage.page,
        querySearch: state.mainPage.querySearch,
    }),
    dispatch => ({
        filterRecipes: (filter) => dispatch(filterRecipes(filter)),
        initialize: ({number, page, querySearch}) => dispatch(getRecipes({number, page, querySearch})),
        changeRecipeSearch: (querySearch) => dispatch(changeRecipeSearch(querySearch)),
        changeNumber: (number) => dispatch(getChangeNumber(number)),
        changePage: (page) => dispatch(changePage(page))
    })
)(MainPage);
