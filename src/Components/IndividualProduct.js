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
      
      <div className='block'>
      
        {/* <img src={individualProduct.url} className="blogimg" alt="product-img"/> */}
       
         <hr/>
          <div className='date'> <img src={require("../images/icons8-calendar-week-32.png")} /> <p className='red'>11 sep 2022</p></div>
        <h2>{individualProduct.title}</h2>
        {/* <p>{individualProduct.brief}</p>  
        
         NOTE SHARE*/}
        <button className='btn'>Read article </button>
       


   
      {/* <div className='product-text title'>{individualProduct.title}</div>
      <div className='product-text description'>{individualProduct.brief}</div>
      <div className='product-text description'>{individualProduct.category}</div>

      <button className='readMoreBtn' onClick={Myblogs(individualProduct)}>Read More</button> */}
    </div> 

  )
}
