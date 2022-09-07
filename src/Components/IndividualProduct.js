import React from 'react'
import { ReadBlog } from './ReadBlog'
import { useNavigate } from 'react-router-dom'


export const IndividualProduct = ({individualProduct}) => {
    // console.log(individualProduct);
    
    const myblogs=((individualProduct)=>{
        // console.log('hello blogs')
        //console.log(individualProduct);
        const history = useNavigate();
        <ReadBlog key = {individualProduct.ID} ReadBlog={individualProduct} />
        history('/ReadBlog')
    
    })

    return ( 
      <div className='product'>
      <div className='product-img'>
            <img src={individualProduct.url} alt="product-img"/>
      </div>
      <div className='product-text title'>{individualProduct.title}</div>
      <div className='product-text description'>{individualProduct.brief}</div>
      <div className='product-text description'>{individualProduct.category}</div>

      <button onClick={myblogs(individualProduct)}>Read More</button>
    </div> 

  )
}
