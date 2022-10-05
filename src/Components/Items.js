import React from 'react'
// import {Link} from 'react-router-dom'
import {IndividualProduct} from './IndividualProduct'

export const Items = ({blogs}) => {

	//console.log(testmode)

	//console.log(myproducts);
	return blogs.map((individualProduct)=>(
		<>
        <IndividualProduct key = {individualProduct.ID} individualProduct={individualProduct} />
		</>
    ))
}

