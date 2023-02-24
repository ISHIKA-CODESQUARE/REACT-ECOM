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

function ProductTiles(props: any) {

  const productdata = props.productData?.data;

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