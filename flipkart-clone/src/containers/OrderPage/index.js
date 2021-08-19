import React, { useEffect } from 'react';
import './style.css';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions';
import Card from '../../components/UI/Card';

/**
* @author
* @function OrderPage
**/

const OrderPage = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    console.log(user);

    return (
        <Layout>
            {
                user.orders.map((order) => {
                    return order.items.map((item) => (
                        <Card style={{ maxWidth: "1200px", margin: "5px auto" }}>
                            <div className='orderItemContainer'>
                                <div>img</div>
                                <div>name</div>
                                <div>Price</div>
                                <div>Order status</div>
                            </div>
                        </Card>
                    ))
                })
            }

        </Layout>
    )

}

export default OrderPage;