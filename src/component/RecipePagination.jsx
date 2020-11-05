import React from "react";
import {Col, Form } from "react-bootstrap";


class RecipePagination extends React.Component {


    render() {
        const { number, page, total, handleNumber, handlePage } = this.props;
        let pages = [];
        for (let i = 1; i <= total/number; i++) {
            pages.push(i);
        }

        return (
            <>
                <Form.Group as={Col} xs={6} sm={3} md={2} lg={2} controlId="formGridState">
                    <Form.Control as="select" value={number} onChange={handleNumber}>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} xs={6} sm={3} md={2} lg={2} controlId="formGridState">
                    <Form.Control as="select" value={page} onChange={handlePage}>
                        {
                            pages.map((pageNumber, index )=> (
                                <option key={index} value={pageNumber} className={page===pageNumber? "text-danger": ""}>{pageNumber}</option>
                            ))
                        }
                    </Form.Control>
                </Form.Group>
            </>
        );
    }
}

export default RecipePagination;