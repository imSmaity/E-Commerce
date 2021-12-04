
import './itemcards.css';
import { CardsData } from './CardsData';
import { Link } from 'react-router-dom';

const Cards=(props)=>{
    return(
        <div className="card cardStyle-h" style={{width: "19rem"}}>
            <h5 className="card-head"><Link to={props.link} className="textLink">{props.cardTitle}</Link></h5>
            <Link to={props.link}><img className="card-img-top img-fluid" src={props.cardImg} alt="..."/></Link>
            <Link  to={props.link} className="card-text textLink">See more...</Link>
        </div>
    );
}

const ItemCards=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        CardsData.map((val,index)=>{

                            return(
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3" key={index}>
                                <center>
                                <Cards
                                    cardTitle={val.cardTitle}
                                    cardImg={val.cardImg}
                                    link={val.link}
                                />
                                </center>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ItemCards;