import React from 'react'


export const ReadBlog = ({individualProduct}) => {
    

  return (
    <>
    <div className='product'>
      <div className='product-img'>
            <img src={individualProduct.url} alt="product-img"/>
      </div>
      <div className='product-text title'>{individualProduct.title}</div>
      <div className='product-text description'>{individualProduct.brief}</div>
      <div className='product-text description'>{individualProduct.category}</div>
      <div className='Full-Description'>individualProduct.description</div>
    </div> 

    </>
  )
}
