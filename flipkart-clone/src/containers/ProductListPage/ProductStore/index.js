import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../../actions';
import { generatePublicUrl } from '../../../urlConfig';
import './style.css';
import { Link } from 'react-router-dom';
import Card from '../../../components/UI/Card';

/**
* @author
* @function ProductStore
**/

const ProductStore = (props) => {


    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000
    });

    useEffect(() => {
        console.log(props);
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug));
    }, []);

    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <Card
                        headerLeft={`${props.match.params.slug} mobile under ${priceRange[key]}`}
                        headerRight={<button>View All</button>}
                        style={{
                            width: 'calc(100% - 40px)',
                            margin: '20px'
                        }}
                        >
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <Link 
                                        to={`/${product.slug}/${product._id}/p`}
                                        style={{ display: 'block'}}
                                        className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: '5px 0' }}>{product.name}</div>
                                                <div>
                                                    <span>4.4</span>&nbsp;
                                                    <span>3322</span>
                                                </div>
                                                <div className="productPrice">{product.price}</div>
                                            </div>
                                        </Link>)
                                }

                            </div>
                        </Card>
                    );
                })
            }
        </>
    )

}

export default ProductStore;