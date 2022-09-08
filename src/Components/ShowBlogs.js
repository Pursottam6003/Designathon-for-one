import React,{useState, useEffect} from 'react'
import {fs} from '../config/config'
import { Items } from './Items';

export const ShowBlogs = () => {
    const [myproducts, setMyProducts]=useState([]);
    const getProducts = async ()=>{
        const myproducts = await fs.collection('Blogs').get();
        const productsArray = [];
        // getting its snapshort 
        for (var snap of myproducts.docs){
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data
            })
            // console.log(myproducts)
            if(productsArray.length === myproducts.docs.length){
              //setting the products
                setMyProducts(productsArray);
                console.log(productsArray)
            }
        }
    }

    useEffect(()=>{
        getProducts();
    },[])
    

    console.log('hello')
  
    return (
    <>
    {myproducts.length > 0&&(
        <div className='my-products'>
            <h1 className='text-center'>All News</h1>
            <div className='products-box'>
                <Items myproducts={myproducts}/>
            </div>
        </div>
    )}
    {myproducts.length < 1&&(
        <div className='my-products please-wait'>Please wait...</div>
    )}
    </>
  )
}
