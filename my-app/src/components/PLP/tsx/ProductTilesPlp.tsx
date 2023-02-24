import React from 'react'
import '../CSS/productTile.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function ProductTiles(props :any) {
console.log(props,"ggg")
    const productdata = props.productData;
    console.log(productdata,"HHHH");

    return (
        <div className="tiles row">
             <h1 className='mb-5'>Womens' Clothing</h1>

        {productdata?.map((product:any)=>{
            return (
              <Card style={{ width: '18rem' }}>
                <Link className="nav-link" to={`/productdetail/${product?._id}`}>
              <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" />
            </Link>
              
              <Card.Body>
                <Card.Title>{product?.Name}</Card.Title>
                <Card.Text>
                {product?.Description}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>

            )
        })}
      </div>

    )
}

export default ProductTiles