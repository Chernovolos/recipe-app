import  React from "react";
import { Col, Image } from "react-bootstrap";


class Recipe extends React.Component {

    render() {
        const { title, image, openLicense, readyInMinutes, servings } = this.props;

        return (
            <>
                <Col xs={12} sm={12} md={6} className="mb-3">
                    <div className="recipe-card-container">
                        <div className="recipe-card-item">
                            <div className="recipes-card-description">
                                <span>open License: {openLicense}</span>
                                <span>time: {readyInMinutes}</span>
                                <span>servings: {servings}</span>
                            </div>
                            <h3 className="recipe-card-title ">Title: {title}</h3>
                        </div>
                        <div className="recipe-card-item">
                            <Image className="card-img" src={"https://spoonacular.com/recipeImages/" + image}/>
                        </div>
                    </div>
                </Col>
            </>
        );
    }
}

export default Recipe;