import Header from '../../../Components/header/Header';
import Navbar from '../../../Components/navbar/Navbar';
import Men from './men/Men';
import Women from './women/Women';
import './menWomenFashion.css';
import Footer from '../../../Components/footer/Footer';
import { Loading } from '../../../Components';
import ProductData from '../../../Api/ProductData';



const MenWomenFashion=()=>{

    const apiData=ProductData()
  
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <Header/>
                </div>
                <div className="col-12">
                    <Navbar/>
                </div>
                {
                    !apiData.isLoaded? 
                    <Loading/>:
                    <>
                        <div className="col-12 menCard">
                            <Men data={apiData.data.men_fashion} />
                        </div>
                        <div className="col-12 menCard">
                            <Women data={apiData.data.women_fashion}/>
                        </div>
                    </>
                }
                <div className="col-12">
                    <Footer/>
                </div>
                
            </div>
        </>
    );
}

export default MenWomenFashion;