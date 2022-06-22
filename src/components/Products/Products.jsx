import React from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from './styles';


const products = [
    {
        id: 1,
        name: 'Shoes',
        description: 'Running Shoes',
        price: '$5',
        image: 'https://cdn.shopify.com/s/files/1/0946/7630/products/986_main_large.jpg?v=1627124303300w,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//cdn.shopify.com/s/files/1/0946/7630/products/986_main_400x319.jpg?v=1627124303%20400w,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//cdn.shopify.com/s/files/1/0946/7630/products/986_main_500x.jpg?v=1627124303%20500w,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//cdn.shopify.com/s/files/1/0946/7630/products/986_main_600x.jpg?v=1627124303%20600w,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//cdn.shopify.com/s/files/1/0946/7630/products/986_main_700x.jpg?v=1627124303%20700w,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//cdn.shopify.com/s/files/1/0946/7630/products/986_main_800x.jpg?v=1627124303%20800w,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//cdn.shopify.com/s/files/1/0946/7630/products/986_main_900x.jpg?v=1627124303%20900w,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20//cdn.shopify.com/s/files/1/0946/7630/products/986_main_1920x.jpg?v=1627124303%201920w'
    },
    {
        id: 2,
        name: 'Macbook',
        description: 'Apple macbook',
        price: '$10',
        image: 'https://static-01.daraz.com.bd/p/b48212e9d3124e1f86aa6d717f578b6b.jpg'
    },
    {
        id: 3,
        name: 'Pure leather wallet Money bag -Black',
        description: 'Gender: Men',
        price: '৳ 99',
        image: 'https://static-01.daraz.com.bd/p/d78e59d68acb7ae75b8cd6205b29bedc.jpg'
    },
    {
        id: 4,
        name: 'Butterfly Home Decor Well Light 5 Pieces',
        description: 'Material: Plastic',
        price: '৳ 182',
        image: 'https://static-01.daraz.com.bd/p/43f515f8072976dd9f9eeabe16feea74.jpg'
    },
    {
        id: 5,
        name: 'Wiresto Q8 TWS Earphone Wireless Earbuds',
        description: 'Bluetooth Version: V5.1',
        price: '৳ 959',
        image: 'https://i.bikroy-st.com/wiresto-q8-tws-earphone-for-sale-dhaka-division/d437db4e-cdbf-4256-a14f-7b934d0db300/1200/630/fitted.jpg'
    },
    {
        id: 6,
        name: 'Step Design Slim fit Full sleeve shirt.',
        description: 'Cotton',
        price: '৳ 431',
        image: 'https://image.made-in-china.com/202f0j00jophAcFgydrq/Bespoke-Business-Men-Formal-Shirt-Classic-Long-Sleeve-Shirt.jpg'
    },
    {
        id: 7,
        name: 'Outdoor Small Mini Backpack',
        description: 'Material: This small hiking backpack is made of water and Tear',
        price: '৳ 123',
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bb664d72-4bf9-411c-90f9-7be3e72d4a1d/sportswear-futura-luxe-mini-backpack-PxLmdZ.png'
    }
]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolBar}/>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );

}

export default Products;