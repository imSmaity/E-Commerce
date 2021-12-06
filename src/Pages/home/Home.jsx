import Carousel from "./carousel/Carousel";
import ItemCards from "./cards/ItemCards";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";


const Home=()=>{
    console.log("HOME Page View",JSON.parse(localStorage.getItem("token")))
    return(
   
            <div className="row">
                <div className="col-12 top">
                    <Header/>
                </div>
                <div className="col-12">
                    <Navbar/>
                </div>
                <div className="col-12">
                    <Carousel/>
                </div>
                <div className="col-12">
                    <ItemCards/>
                </div>
                <div className="col-12">
                    <Footer/>
                </div>
            </div>

    );
}

export default Home;