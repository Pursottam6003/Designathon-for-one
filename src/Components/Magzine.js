import React,{forwardRef,useRef} from 'react'
import jote_img from "../images/image_jote.jpg"
import bglogo from '../images/logobgrm.png'
import img from '../images/icons8-calendar-week-32.png'
import $ from 'jquery';
import ReactToPrint, { PrintContextConsumer } from "react-to-print";


const linkCopied=()=>
{ 
  var $temp = $("<input>");
  var $url = $(window.location).attr('href');  
  $('.share').on('click', function() {
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    console.log('working inside')
    
  })
  let btn = document.getElementById('share');
  btn.innerHTML="Linked Copied"
}
const ComponentToPrint = forwardRef((props, ref) => {
    return(
      <>
    <div ref={ref}>
    <div id="Main_box" className='Main_box'>
      <div className='wrapper'>
        <div className='titlebox'>
            <div><img className='CollgeLogo' alt='logos' src={bglogo}/></div>
            
            <p><img src={img} alt='magazine'/> <span className='DATE'>11th Sept 2022</span></p>
        </div>

        <div className='content'>
        <h1 className='MAIN'>MOU SIGNED BETWEEN NATINAL INSTITUTE OF ARUNCHAL AND GSS JOTE</h1>
          <h2 className='SUBHEAD'>THIS IS SUBHEADING </h2>
          <p className='PARA'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Similique vero facilis odit nobis, consequatur minus animi veritatis
            hic quia reiciendis quod illum tempora eligendi commodi distinctio saepe 
          molestias debitis ullam, voluptate praesentium quasi.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Similique vero facilis odit nobis, consequatur minus animi veritatis
            hic quia reiciendis quod illum tempora eligendi commodi distinctio saepe 
          molestias debitis ullam, voluptate praesentium quasi.

          </p>
        </div>
 
        <div className='image-container'>
            <img src={jote_img} className='images' alt="mou"></img>
            <p className='image-title'>Title : leoafoafojiafoi hdaslfafiafljdasf af</p>
        </div>
        
        {/* <button onClick={changebg}> Click</button> */}
        
    </div>
    </div>
         </div>
    
      </>
    )
    
  });

export const Magzine = () => {

    
    const changebg=()=>{
        //console.log('heelo');
        var maxNumber = 21;
        let bg = document.getElementById('Main_box')
        var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        let randClass = `bg${randomNumber}`
        if (bg.classList.length > 1) {
            bg.classList.remove(bg.classList[1]);
            bg.classList.add(randClass);
        } else {
            bg.classList.add(randClass);
        }
        //console.log(randomNumber);
        //return randomNumber;
    }

    window.addEventListener('load',changebg);


    const ref = useRef();
    return (
    <>
    <div>
      <ComponentToPrint ref={ref} />
      <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>

          {({ handlePrint }) => (
            <button  className='Toprint' id="Toprint" onClick={handlePrint}><img src="https://img.icons8.com/color/20/000000/print.png"/>Print</button>
         
          )}
        
        </PrintContextConsumer>
        <button className='share' id="share" onClick={linkCopied}><img src="https://img.icons8.com/color/20/000000/share--v1.png"/> Share </button>
      </ReactToPrint>
    </div>

  
    </>
  )
}
