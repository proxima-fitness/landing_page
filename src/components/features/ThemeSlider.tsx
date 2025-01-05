import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"
import programs_pastel_device from "../../../public/programs-pastel-device.png";
import programs_classic_device from "../../../public/programs-classic-device.png";
import programs_dark_device from "../../../public/programs-dark-device.png";
import programs_mobile_white_device from "../../../public/programs-mobile-white-device.png";

export default function ThemeSlider() {
  let settings = {
	speed: 500,
    draggable: true,
    easing: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    initialSlide: 0,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 6,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  return (
	<div className="w-full px-6 h-full text-white">
	<Slider {...settings}>
        <img src={ programs_classic_device } alt="Program Creator Image" className="relative max-w-[180px] h-auto z-[6]"/>
        <img src={ programs_dark_device } alt="Program Creator Image" className="relative max-w-[180px] h-auto z-[6]"/>
        <img src={ programs_mobile_white_device } alt="Program Creator Image" className="relative max-w-[180px] h-auto z-[6]"/>
        <img src={ programs_pastel_device } alt="Program Creator Image" className="relative max-w-[180px] h-auto z-[6]"/>
    </Slider>
	</div>
  );
}
