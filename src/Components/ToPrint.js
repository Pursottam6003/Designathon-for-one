import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Magzine } from "./Magzine";


export const ToPrint = () => {
    let componentRef = useRef(<Magzine/>);
  return (

    <> 
    <div className='Controls'>
    <button className='toprint'>Print</button>
    <button className='Share'>Share</button>

    <div id="print_component">
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <Magzine ref={(el) => (componentRef = el)} />
        </div>
      </div>
      
    </div>
    </>
  )
}
