import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../actions';

/**
* @author
* @function Category
**/

const Category = (props) => {

    const category = useSelector(state => state.category);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

    const renderCategories = (categories) => {

        let myCategories = [];

        for (let category of categories) {

            myCategories.push(
                <li key={category.name}>
                    {category.name}
                </li>
            );
        }

        return myCategories;

    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Category</h3>
                            <button>Add</button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <ul>
                            {renderCategories(category.categories)}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}

export default Category