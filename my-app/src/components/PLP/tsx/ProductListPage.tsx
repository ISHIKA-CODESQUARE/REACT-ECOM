import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import ProductTiles from './ProductTilesPlp'
import SideBar from './SideBarPlp'
import Discount from './DiscountPlp'
import Banner from './Banner_PLP'

function ProductListPage() {

  interface RouteParams {
    catid: string;
  }


  const params = useParams<RouteParams>();

  const catid = params.catid;

  const [productData, setProductData] = useState([]);
  const [productDataPermanent, setProductDataPermanent] = useState([]);
  const [sizeArr, setSizeArr] = useState([]);
  const [priceArr, setPriceArr] = useState([])
  // https://1e18-2401-4900-1c18-7e2a-1d35-f1dc-7d75-32d4.in.ngrok.io/api/productByCgid/mans

  let API: string = `https://ecommbackend-yvqe.onrender.com/api/productByCgid/${catid}`;

  const fetchApiData = async (API: string) => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      var tempArr: any = []
      data?.map((item) => {
        tempArr.push(item?.Size);
      })
      let uniqueChars = tempArr.filter((c, index) => {
        return tempArr.indexOf(c) === index;
      });
      setSizeArr(uniqueChars)




      var tempPrice: any = []
      data?.map((item) => {
        console.log(item, "item")
        tempPrice.push(item?.Price);
      })
      let uniquePrice = tempPrice.filter((c, index) => {
        return tempPrice.indexOf(c) === index;
      });
      console.log(uniquePrice, "price");


       setPriceArr(uniquePrice)

       setProductData(data);
      setProductDataPermanent(data);

    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchApiData(API);
  }, [catid]);

  return (
    <Container>
      <Row>
        <Banner />
      </Row>
      <Row>
        <Col lg={4}>
          <SideBar productDataPermanent={productDataPermanent} setProductData={setProductData} sizeArr={sizeArr} uniquePrice={priceArr} />
        </Col>
        <Col lg={8}>
          <ProductTiles productData={productData} />
        </Col>
      </Row>
    </Container>
  )

}
export default ProductListPage;