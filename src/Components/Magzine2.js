import React, { Component, forwardRef, useEffect, useRef, useState } from 'react'
import jote_img from "../images/image_jote.jpg"
import bglogo from '../images/logobgrm.png'
import $ from 'jquery';
import ReactToPrint, { PrintContextConsumer } from "react-to-print";


const linkCopied = () => {
  var $temp = $("<input>");
  var $url = $(window.location).attr('href');
  $('.share').on('click', function () {
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    console.log('working inside')
  })
  let btn = document.getElementById('share');
  btn.innerHTML = "Linked Copied"
}
const ComponentToPrint = forwardRef((props, ref) => {
  const { blogsarrayprop } = props
  const [blogsarray, setBlogsarray] = useState(undefined)

  useEffect(() => {
    setBlogsarray(blogsarrayprop)
  })
  // console.log(blogsarray);
  return (
    <>
      <div ref={ref}>
        <div id="Main_box" className='Main_box'>
          <div className='titlebox'>
            <div><img className='CollgeLogo' alt='logos' src={bglogo} /></div>
            <h2>{blogsarray ? blogsarray[0].Heading : ''}</h2>
            <p><img src="https://img.icons8.com/color/30/000000/calendar--v1.png" alt='magazine' /> </p>

            {blogsarray ? blogsarray[0].EventDate : ''}  within above p
          </div>

          <div className='content'>
            {blogsarray ? blogsarray[0].wholeDescription : ''}
          </div>

          <div className='image-container'>
            <img src={jote_img} className='images' alt="mou"></img>
            <p className='image-title'>Title :   {blogsarray ? blogsarray[0].Heading : ''}</p>
          </div>
        </div>

      </div>
    </>
  )

});

export class Magzine2 extends Component {
  initialState = {
    blogsarray: []
  }

  state = this.initialState

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  changebg = () => {
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({
        blogsarray: this.props.blogsarray
      })
    }
  }

  componentDidMount() {
    this.changebg();
    this.setState({
      blogsarray: this.props.blogsarray
    })
  }

  render() {
    return (
      <>
        <div>
          <ComponentToPrint blogsarrayprop={this.state.blogsarray} ref={this.ref} />
          <ReactToPrint content={() => this.ref.current}>
            <PrintContextConsumer>

              {({ handlePrint }) => (
                <button className='Toprint' id="Toprint" onClick={handlePrint}><img src="https://img.icons8.com/color/20/000000/print.png" />Print</button>

              )}

            </PrintContextConsumer>
            <button className='share' id="share" onClick={linkCopied}><img src="https://img.icons8.com/color/20/000000/share--v1.png" /> Share </button>
          </ReactToPrint>
        </div>


      </>
    )
  }
}

/*
export const Magzine2 = (props) => {


  // const { blogsarray } = props
  const changebg = () => {
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

  window.addEventListener('load', changebg);


  const ref = useRef();
  return (
    <>
      <div>
        <ComponentToPrint ref={ref} />
        <ReactToPrint content={() => ref.current}>
          <PrintContextConsumer>

            {({ handlePrint }) => (
              <button className='Toprint' id="Toprint" onClick={handlePrint}><img src="https://img.icons8.com/color/20/000000/print.png" />Print</button>

            )}

          </PrintContextConsumer>
          <button className='share' id="share" onClick={linkCopied}><img src="https://img.icons8.com/color/20/000000/share--v1.png" /> Share </button>
        </ReactToPrint>
      </div>


    </>
  )
}
*/