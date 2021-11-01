import axios from "axios";
import { useState } from "react";


const Tab2=(props)=>{

    const [data,setData]=useState({caroImg1:'',caroImg2:'',caroImg3:'',c1:'',c2:'',c3:'',c4:'',c5:'',c6:''})
    function handleChange(e){
        setData({...data,[e.target.name]:e.target.value});
    }

    function submitData(e){
        e.preventDefault();

        axios({
            method: 'post',
            url: 'http://localhost:8080/home-page',
            data: {
                carousel1:data.caroImg1,
                carousel2:data.caroImg2,
                carousel3:data.caroImg3,
                card1:data.c1,
                card2:data.c2,
                card3:data.c3,
                card4:data.c4,
                card5:data.c5,
                card6:data.c6
            }
        })
    }


    return(
        <>
            <div className={props.className} style={props.styleing}>
                <label>Carousel1 Img:</label>
                <input type="text" name="caroImg1" id="caroImg1" onChange={(e)=>handleChange(e)}/>
                <label>Carousel2 Img:</label>
                <input type="text" name="caroImg2" id="caroImg2"/>
                <label>Carousel3 Img:</label>
                <input type="text" name="caroImg3" id="caroImg3"/>
                <label>Card1 Img:</label>
                <input type="text" name="c1" id="c1"/>
                <label>Card2 Img:</label>
                <input type="text" name="c2" id="c2"/>
                <label>Card3 Img:</label>
                <input type="text" name="c3" id="c3"/>
                <label>Card4 Img:</label>
                <input type="text" name="c4" id="c4"/>
                <label>Card5 Img:</label>
                <input type="text" name="c5" id="c5"/>
                <label>Card6 Img:</label>
                <input type="text" name="c6" id="c6"/>

                <button type="button" className="btn btn-primary" onClick={(e)=>submitData(e)}>Add</button>
            </div>
        </>
    );
}

export default Tab2;