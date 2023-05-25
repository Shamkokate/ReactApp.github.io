import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ReviewCard from './ReviewCard';

const Home = () => {
  return (
    <div className='homePage my-5'>
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
            src="https://m.media-amazon.com/images/G/31/img23/Wireless/Lava/LavaBlaze2/GW/Rv1/_1400x800._CB592763998_.jpg"
            alt="Four slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg d-block"
            src="https://m.media-amazon.com/images/G/31/img21/Wireless/ssserene/UnRec/D42850095_WLD_OnePlus_OSCAR_1400x800new._SX828_QL85_.jpg"
            alt="Five slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg d-block"
            src="https://m.media-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/ChangeZ7/NoOffer/NewLaunch/D74387056_WLD---iQOO-Z7-5G--BAU---Design-SIM_1400x800Rev._SX828_QL85_.jpg"
            alt="Six slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg d-block"
            src="https://m.media-amazon.com/images/G/31/img21/Wireless/vinambia/narzomarch28/D39487006_IN_WLD_realmenarzo50_Launch_1400x800._SX828_QL85_.jpg"
            alt="Seven slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg d-block"
            src="https://m.media-amazon.com/images/G/31/img22/WLA/Launches23/IKODOO/Sale/D74622506_IN_WLA_IKODOO_launch_1400x800._CB592717048_.gif"
            alt="Eight slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className='part1'>
          <img className='offer' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Simonti/Lava/Launch/Blaze5G/6GB/Banners/Sale/New/1242x500_1.gif' alt='offer1' />
      </div>

      <div className='part2'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/Category_page/Nov_revamp/1_770x450-2.jpg' />
      </div>

      <div className='part3'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vinambia/SSS1/mob_catpage-hero_1242x450.jpg' />
      </div>

      <ReviewCard />

    </div>

  )
}




export default Home