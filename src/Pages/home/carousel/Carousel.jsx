import './carousel.css';
import slider1 from '../../../Assets/Images/home-img/slider1.jpg';
import slider2 from '../../../Assets/Images/home-img/slider2.jpg';
import slider3 from '../../../Assets/Images/home-img/slider3.jpg';
import {Link} from 'react-router-dom';

const slide1=(
    <div className="carousel-item active" data-bs-interval="10000">
        <Link to="/Louis_Philippe_Jeans_Pure_Cotton_Solid_Coat"><img src={slider1} className="d-block w-100 slideImg" alt="..."/></Link>
        <div className="carousel-caption d-none d-md-block">
            <h4>Louis Philippe Jeans Pure Cotton Solid Coat</h4>
        </div>
    </div>
);
const slide2=(
    <div className="carousel-item" data-bs-interval="2000">
        <Link to="/Realme_Mobile_Narzo_20"><img src={slider2} className="d-block w-100 slideImg" alt="..."/></Link>
        <div className="carousel-caption d-none d-md-block">
            <h4>Realme Mobile Narzo 20 (4GB RAM,64GB Storage)</h4>
        </div>
    </div>
);
const slide3=(
    <div className="carousel-item">
    <Link to="/carousel3"><img src={slider3} className="d-block w-100 slideImg" alt="..."/></Link>
        <div className="carousel-caption d-none d-md-block">
            <h4>Best Offer On Realme Mobiles</h4>
        </div>
    </div>
);

const Carousel=()=>{
    return(
        <>
            <div className="row">
                <div className="col-12 carouselStyle">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            {slide1}
                            {slide2}
                            {slide3}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>                    
                </div>
            </div>
        </>
    );
}

export default Carousel;