import "./ProductScreen.css";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// // Actions
// import { getProductDetails } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = () => {
//   const [qty, setQty] = useState(1);
//   const dispatch = useDispatch();

//   const productDetails = useSelector((state) => state.getProductDetails);
//   const { loading, error, product } = productDetails;

//   useEffect(() => {
//     if (product && match.params.id !== product._id) {
//       dispatch(getProductDetails(match.params.id));
//     }
//   }, [dispatch, match, product]);

//   const addToCartHandler = () => {
//     dispatch(addToCart(product._id, qty));
//     history.push(`/cart`);
//   };

  return (
 
        < >
        <div className="productscreen">
          <div className="productscreen__left">
            <div className="left__image">
              <img src="https://www.medispace.tn/image/cache/data/hygiene-intime/11839-svr-topialyse-gel-lavant-1l-500x500.jpg" alt="SVR TOPIALYSE GEL LAVANT FLACON POMPE 1L" />
            </div>
            <div className="left__info">
              <p className="left__name">Product 1</p>
              <p>Price: $500.99 </p>
              <p>Description: SVR Topialyse Crème Soin nourrissant anti-dessèchement Anti-irritation & anti-grattage Bébé (hors prématuré) </p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>$500.99</span>
              </p>
              <p>
                Status:
                <span>
                 In Stock
                </span>
              </p>
              <p>
                Qty
                <select >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
              </p>
              <p>
                <button type="button" >
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
          </div>
        </>
    
  
  );
};

export default ProductScreen;