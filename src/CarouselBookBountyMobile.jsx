import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookBountyMobileHome from "./Images/BookBountyImages/BookBountyMobileHome.png";
import BookBountyMobileSearch from "./Images/BookBountyImages/BookBountyMobileSearch.png";
import BookBountyMobileUsers from "./Images/BookBountyImages/BookBountyMobileUsers.png";


export default function CarouselBookBountyMobile() {

  let images = [
    BookBountyMobileHome,
    BookBountyMobileSearch,
    BookBountyMobileUsers,
];

  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="fade-in-6 my-[20%] md:my-[5%] mx-auto px-[5%] md:w-[80%]">
        <Slider {...settings}>
          {images?.map((image) => (
            <div key={image}>
              <img className="mx-auto" width="400" src={image} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
