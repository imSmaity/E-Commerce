import { Route } from "react-router-dom";
import { AboutUs, Coat1, Help, Null, RealmeMob1 } from "../Pages";


export const HomeItem=()=>{
    return(
        <>
            <Route path="/Louis_Philippe_Jeans_Pure_Cotton_Solid_Coat">
                <Coat1/>
            </Route>
            <Route path="/Realme_Mobile_Narzo_20">
                <RealmeMob1/>
            </Route>
            <Route path="/s_cares">
                <Null/>
            </Route>
            <Route path="/g_smile">
                <Null/>
            </Route>
            <Route path="/c_facebook">
                <Null/>
            </Route>
            <Route path="/c_twitter">
                <Null/>
            </Route>
            <Route path="/c_instagram">
                <Null/>
            </Route>
            <Route path="/p_protection">
                <Null/>
            </Route>
            <Route path="/about_us">
                <AboutUs/>
            </Route>
            <Route path="/your_account">
                <Null/>
            </Route>
            <Route path="/returns_centre">
                <Null/>
            </Route>
            <Route path="/help">
                <Help/>
            </Route>
        </>
    );
}