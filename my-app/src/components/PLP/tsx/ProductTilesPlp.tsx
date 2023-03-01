// import React from 'react'
// import '../CSS/productTile.css'

// function ProductTiles() {
//     return (
//       <div className="card-group">
//       <div className="card">
//       <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//           <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         </div>
//       </div>
//       <div className="card">
//       <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//           <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         </div>
//       </div>
//       <div className="card">
//       <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//           <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//         </div>
//       </div>
//     </div>

//     )
// }

// export default ProductTiles

import React from 'react'
import '../CSS/productTile.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function ProductTiles(props :any) {
    const productdata = props.productData;

    function addToCart(productID,price,image,name){
      var myBasket:any = JSON.parse(localStorage.getItem('basket')as any)? JSON.parse(localStorage.getItem('basket')as any):[];
      if(myBasket[0] != null){
       
            if(myBasket.find(myBasketid => myBasketid.pid === productID)){  // one line whole iteration bcoz we won't need multiple iteration bcoz we have else loop as well which will run.
                                                                            // console.log(myBasket[i].qty, 'old quantity')
              var index = myBasket.findIndex(myBasketid => myBasketid.pid === productID);
              if(index !== -1){
              if(myBasket[index].pid === productID){
                myBasket[index].qty = myBasket[index].qty + 1;
              }
                // console.log(myBasket[i].qty,"updated quantity")
                localStorage.setItem('basket', JSON.stringify(myBasket) as any);
            }
          }
            else{
              myBasket?.push({pid:productID, price:price, qty:1,image:image,name:name})
              localStorage.setItem('basket',JSON.stringify(myBasket) as any);
          }
        // localStorage.setItem('basket',JSON.stringify(basket) as any)
      }
      else{
        myBasket?.push({pid:productID, price:price, qty:1,image:image,name:name})
        localStorage.setItem('basket',JSON.stringify(myBasket) as any);
      }
      window.location.reload();
    }


    return (
        <div className="tiles row">
             <h1 className='mb-5'>Womens' Clothing</h1>

        {productdata?.map((product:any)=>{
            return (
              <Card style={{ width: '18rem' }}>
                <Link className="nav-link" to={`/productdetail/${product?._id}`}>
              <Card.Img variant="top" src={`https://ecommbackend-yvqe.onrender.com/${product?.Image}`} />
            </Link>
              
              <Card.Body>
                <Card.Title>{product?.Name}</Card.Title>
                <Card.Title>$ {product?.Price}</Card.Title>
                <Card.Text>
                {product?.Description}
                </Card.Text>
                <Button variant="primary"onClick={()=> addToCart(product?._id,product?.Price,product?.Image,product?.Name)} >Add to Cart</Button>
              </Card.Body>
            </Card>

            );
        })}
      </div>
    )
    // onClick={()=> addToCart(product?._id,product?.Price,product?.Image,product?.Name)}>
  console.log(productdata);

  return (
    <div className="container">

      <h1 className='mb-5'>Womens' Clothing</h1>

      

      {productdata?.map((product: any) => {
        return (

          //     <div className="card">
          //   <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="..."/>
          //   <div className="card-body row-3">
          //     <h5 className="card-title">{product?.Name}</h5>
          //     <p className="card-text">{product?.Description}</p>
          //     <p className="card-text"><small className="text-muted">Price = {product?.Price}</small></p>
          //   </div>
          // </div>

          // <div className="col-12 bg-info">

          //   <div className="col-4 ">
          //  <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="..."/>

          //   </div>

          // </div>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="..." />
                <div className="card-body row-3">
                  <h5 className="card-title">{product?.Name}</h5>
                  <p className="card-text">{product?.Description}</p>
                  <p className="card-text"><small className="text-muted">Price = {product?.Price}</small></p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="..." />
                <div className="card-body row-3">
                  <h5 className="card-title">{product?.Name}</h5>
                  <p className="card-text">{product?.Description}</p>
                  <p className="card-text"><small className="text-muted">Price = {product?.Price}</small></p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="card-img-top" alt="..." />
                <div className="card-body row-3">
                  <h5 className="card-title">{product?.Name}</h5>
                  <p className="card-text">{product?.Description}</p>
                  <p className="card-text"><small className="text-muted">Price = {product?.Price}</small></p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default ProductTiles