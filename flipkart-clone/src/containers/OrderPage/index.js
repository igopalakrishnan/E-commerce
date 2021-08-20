import React, { useEffect } from 'react';
import './style.css';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../actions';
import Card from '../../components/UI/Card';
import { generatePublicUrl } from '../../urlConfig';

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
                                <div className='orderImgContainer'>
                                    <img className='orderImg' src={generatePublicUrl(item.productId.productPictures[0].img)} />
                                </div>
                                <div className='orderRow'>
                                    <div className='orderName'>{item.productId.name}</div>
                                    <div className='orderPrice'>{item.payablePrice}</div>
                                    <div>{order.paymentStatus}</div>
                                </div>

                            </div>
                        </Card>
                    ))
                })
            }

        </Layout>
    )

}

export default OrderPage;