import React from "react";
import "../css/cartProduct.css";
import { Link } from "react-router-dom";
import { faInr, faPlus, faMinus, faTrash  } from  '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartProduct = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 border-top border-bottom">
            <div className="row mt-4 mb-4">
              <div className="col-4 mt-2 mb-2">
                {/* image */}
                <img
                  className="productImage"
                  src="images/TShirt.jpeg"
                  alt="Not found"
                />
              </div>
              <div className="col-8">
                <div className="row mt-2 d-flex">
                  <div className="col-6 text-align-productName">
                    <Link to="ProductDetailPage/:id" className="productName-font--weight">T-Shirt</Link>
                  </div>
                  <div className="col-6 productName-font--weight---price ">
                  <FontAwesomeIcon icon={faInr} />400
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12 text-align-attributes">
                   <span>Size</span>
                   <br />
                   <span>Color</span>
                  </div>
                </div>
                <div className="row button-alignment">
                  <div className="col-6 ">
                    <button >
                      <FontAwesomeIcon className="setBorder" icon={faPlus} />
                    </button>
                    <span className="quantity-of-product">0</span>
                    <button >
                      <FontAwesomeIcon className="setBorder" icon={faMinus} />
                    </button>

                  </div>
                  <div className="col-6 removeItemButton">
                  <FontAwesomeIcon icon={faTrash} /> Remove Item
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">{/* payment and total */}</div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
