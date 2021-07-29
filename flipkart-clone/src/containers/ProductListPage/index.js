import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout';
import './style.css';

/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {

  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    console.log(props);
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);


  return (
    <Layout>

      {
        Object.keys(product.productsByPrice).map((key, index) => {
          return (
            <div className="card">
              <div className="cardHeader">
                <div>Samsung mobile under 10k</div>
                <button>View All</button>
              </div>
              <div>
                {
                  product.productsByPrice[key].map(product =>
                    <div className="productContainer">
                      <div className="productImgContainer">
                        <img src="http://localhost:2000/public/XDQ7fhOKs9-s20-fe-5g-sm-g781b-ds-samsung-original-imag47fdfgmg2gnh.jpeg" alt="" />
                      </div>
                      <div className="productInfo">
                        <div style={{ margin: '5px 0' }}>Samsung galaxy s20</div>
                        <div>
                          <span>4.4</span>&nbsp;
                          <span>3322</span>
                        </div>
                        <div className="productPrice">2000</div>
                      </div>
                    </div>)
                }

              </div>
            </div>
          );
        })
      }

    </Layout>
  )

}

export default ProductListPage;