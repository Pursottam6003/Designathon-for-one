import React from 'react'
// import { ReadBlog } from './ReadBlog'
// import { useNavigate } from 'react-router-dom'


export const IndividualProduct = ({individualProduct}) => {
    // console.log(individualProduct);
    
    // const Myblogs=((individualProduct)=>{
    //     // console.log('hello blogs')
    //     //console.log(individualProduct);
    //     const history = useNavigate();
    //     <ReadBlog key = {individualProduct.ID} ReadBlog={individualProduct} />
    //     history('/ReadBlog')
    // })

    return ( 
      <div className='main'>
      <div className='blog_card'>
        <img src={individualProduct.url} className="blogimg" alt="product-img"/>
        <div className='cont'>
        <h4>{individualProduct.title}</h4>
        <p>{individualProduct.brief}</p>
        <button className='btn'>Read article </button>
        </div>


      </div>
      {/* <div className='product-text title'>{individualProduct.title}</div>
      <div className='product-text description'>{individualProduct.brief}</div>
      <div className='product-text description'>{individualProduct.category}</div>

      <button className='readMoreBtn' onClick={Myblogs(individualProduct)}>Read More</button> */}
    </div> 

  )
}
