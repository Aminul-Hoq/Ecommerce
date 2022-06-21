import React from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product/Product";



const products = [
    {id: 1, name:'Shoes', description: 'Running Shoes', price: '$5'},
    {id: 2, name:'Macbook', description: 'Apple macbook', price: '$10'},
    {id: 3, name:'Pure leather wallet Money bag -Black', description: 'Gender: Men', price: '৳ 99'},
    {id: 4, name:'Butterfly Home Decor Well Light 5 Pieces', description: 'Material: Plastic', price: '৳ 182'},
    {id: 5, name:'Wiresto Q8 TWS Earphone Wireless Earbuds', description: 'Bluetooth Version: V5.1', price: '৳ 959'},
    {id: 6, name:'Step Design Slim fit Full sleeve shirt.', description: 'Cotton', price: '৳ 431'},
    {id: 7, name:'Outdoor Small Mini Backpack', description: 'Material: This small hiking backpack is made of water and Tear', price: '৳ 123'}
]

const Products = () => {
    return (
        <main>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );

}

export default Products;