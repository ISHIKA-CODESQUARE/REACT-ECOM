import React from 'react';

export async function productDetailData() {
const productDetailDataurl = `https://edf1-2401-4900-1c18-7e2a-1d35-f1dc-7d75-32d4.in.ngrok.io/api/product/63f5a84fa54163c00ae535e1`;

    const response = await fetch(productDetailDataurl,{
        method:'GET',
        headers: {'content-type':'application/json'}
    })
    const responseBody = await response.json();
    return responseBody;
}

