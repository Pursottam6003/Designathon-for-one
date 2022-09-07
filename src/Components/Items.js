import React from 'react'
// import {Link} from 'react-router-dom'
import {IndividualProduct} from './IndividualProduct'

export const Items = ({myproducts}) => {

	//console.log(testmode)

	//console.log(myproducts);
	return myproducts.map((individualProduct)=>(
		<>
        <IndividualProduct key = {individualProduct.ID} individualProduct={individualProduct} />
		</>
    ))
}

