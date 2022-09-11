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
    {myproducts.length > 0 && (
        <div className='my-products'>

            <h1 className='txt'> <span> <b>NEWS</b></span></h1>
                <div className='all-news'>
                <div className='highlight'>
{/* bass abi ke liya dal hu isme img , title , short ,discription  firebase se fetch karke daldena  */}
     <div> <img src={require("../images/addactivity.jpg")} />  </div> <div className='writing'> 
        <h1>THE CAT THAT SAYS MEOW </h1>
     <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi nihil vitae atque? Esse asperiores consequatur sed quo, numquam corrupti commodi officiis hic sint illo recusandae. Voluptates quasi error commodi consequuntur.

     </p> </div> 
                </div>
                <div className='news-block'>
                    <h1>LATEST</h1>
                    
                    <Items myproducts={myproducts}/>
                </div>
            </div>
        </div>
    )}
    {myproducts.length < 1 && (
        <div className='my-products please-wait'>Please wait...</div>
    )}
    </>
  )
}
