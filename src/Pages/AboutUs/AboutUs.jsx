import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import './aboutus.css';


const about=(
    <p className="container" id="about-text">
        Welcome to <strong>Shop.in</strong>, your number one source for all things shoes, bags, Phones. 
        We're dedicated to giving you the very best of product, with a focus on three things characteristics dependability, customer service and uniqueness.
        Founded in 2021 by Suman Maity, Shop.in has come from its beginnings in a Medinipur. When Suman first started out, his passion for 
        helping other parents be more eco-friendly, providing the best equipment for his fellow musicians drove him to do intense research, 
        and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over India, 
        and are thrilled to be a part of the eco-friendly wing of the fashion, baked goods, watches industry.
        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, 
        please don't hesitate to contact us.

        <div>
            Sincerely,<br/>
            Suman Maity, Founder
        </div>
    </p>
);

export const AboutUs=()=>{
    return(
        <div className="row">
            <div className="col-12">
                <Header/>
            </div>
            <div className="col-12">
                <Navbar/>
            </div>
            <div className="col-12">
                {about}
            </div>
        </div>
    );
}