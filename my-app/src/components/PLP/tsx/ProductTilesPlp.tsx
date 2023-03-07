import React from 'react'
import '../CSS/productTile.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


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
        <>
        <Row className="text-center mt-5">
        <h1 className='mb-5 text-dark'>Women's Clothing</h1>
        </Row>
        <Row className="tiles">
        {productdata?.map((product:any)=>{
            return (
              <Card className="m-1 d-flex flex-column card-image " style={{ width: '15rem' }}>
                <Link className="nav-link" to={`/productdetail/${product?._id}`}>
              <Card.Img height={200} width={100} variant="top" src={`https://ecommbackend-yvqe.onrender.com/${product?.Image}`} />
            </Link>
              
              <Card.Body>
                <Card.Title className='text' >{product?.Name}</Card.Title>
                <Card.Title className='text'>$ {product?.Price}</Card.Title>
                <Card.Text className='text'>
                {product?.Description}
                </Card.Text>
                <Button className='d-flex flex-end' variant="primary"onClick={()=> addToCart(product?._id,product?.Price,product?.Image,product?.Name)} >Add to Cart</Button>
              </Card.Body>
            </Card>

            );
      })}

        </Row>
        </>
    )
   }
export default ProductTiles