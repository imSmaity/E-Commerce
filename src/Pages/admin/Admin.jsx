import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";
import './admin.css';

const admin_url="/url-admin-suman-expo-20-uino-cc-dd20jadbaoxk36FBVVBJKJ789e3bwekj"

const Admin=()=>{

    const styleHide={display:'inline'};
    const styleHide2={display:'none'};
    const styleHide3={display:'none'};

    function formView(s){
        if(s==="tab1"){
            styleHide.display='inline';
            styleHide2.display='none';
            styleHide3.display='none';
        }
        else if(s==="tab2"){
            styleHide.display='none';
            styleHide2.display='inline';
            styleHide3.display='none';
        }
        else{
            console.log(s)
            styleHide.display='none';
            styleHide2.display='none';
            styleHide3.display='inline';
        }
    }

    return(
        <>
            <div className="tabs">
                <button type="button" className="tabsBtn" onClick={formView("tab1")}>Product Add</button>      
                {/* <button type="button" className="tabsBtn" onClick={formView("tab2")}>Product Delete</button>      */}
                {/* <button type="button" className="tabsBtn" onClick={formView("tab3")}>User Delete</button>                  */}
            </div>
            <div><Tab1 styleing={styleHide} className="pds" /></div>
            <div><Tab2 styleing={styleHide2} className="pds" /></div>
            <div><Tab3 styleing={styleHide3} className="pds" /></div>
        </>
    );
}

export default Admin;
export {admin_url}