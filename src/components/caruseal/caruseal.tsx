import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Frendata, Fruits, Ownbakery, Ownbakery2 } from './style.ts';
import { Link } from 'react-router-dom';


const Caruseal = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  slidesToSlide={1}
  partialVisible={true}
  infinite={true}
    autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition='all .5'
  transitionDuration={500}
  containerClass='carousel-container'
  removeArrowOnDeviceType={['tablet', 'mobile']}
  dotListClass='custom-dot-list-style'
  itemClass='carousel-item-padding-40-px'
>

<div>
   <Ownbakery>
       <h2>Own Bakery</h2>
         <button>Shop Now</button>
     
   </Ownbakery>
</div>
<div style={{textAlign:"center"}}>
    <Fruits>
        <h2>Large selection of fresh vegetables and fruits</h2>
      <Link to={"/Fruitsdata"}>
        <button>Shop Now</button>
      </Link>
      
    </Fruits>


</div>
<div >
    <Ownbakery2>
        <h2>Herbs &
        Spices</h2>
        <button>Shop Now</button>
    </Ownbakery2>
</div>
<div style={{textAlign:"center"}} >
    <Frendata>
        <h2>Supplies from farms</h2>
        <button>Shop Now</button>
    </Frendata>
</div>

</Carousel>
  )
}

export default Caruseal;
