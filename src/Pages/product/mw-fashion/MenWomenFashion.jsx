import Header from '../../../Components/header/Header';
import Navbar from '../../../Components/navbar/Navbar';
import Men from './men/Men';
import Women from './women/Women';
import './menWomenFashion.css';
import Footer from '../../../Components/footer/Footer';



const MenWomenFashion=()=>{

    
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <Header/>
                </div>
                <div className="col-12">
                    <Navbar/>
                </div>
                <div className="col-12 menCard">
                    <h3 id="mansH">Styles for Men</h3> 
                    <Men/>
                </div>
                {/* <div className="col-12 menCard">
                    <h3 id="mansH">Styles for Women</h3> 
                    <Women/>
                </div> */}
                <div className="col-12">
                    <Footer/>
                </div>
                
            </div>
        </>
    );
}

export default MenWomenFashion;