import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const MainCarousel = () => {
  return (
    
    <Carousel slide={false}>
    <Carousel.Item>
      <img
        className="carouselImg d-block"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/ssserene/Larry/LP/Larry_LP_2303_DT1.jpg"
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carouselImg d-block"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/Attachbanner/D51285990_WLA_Attach_JulyAcc_Mob_Hero_1242x450_2.jpg "
        alt="Second slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carouselImg d-block"
        src=" https://m.media-amazon.com/images/G/31/img21/Wireless/ssserene/OP11R/GW/7thMar/D70855081_WLD_OnePlus_Udon_1400x800._CB595054840_.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="carouselImg d-block"
        src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/cb2eac981ee9b627.jpg?q=50"
        alt="Four slide"
      />
    </Carousel.Item>
  </Carousel>

  )
}

export default MainCarousel