import { Route } from "react-router-dom";
import { AboutUs, Help, Null} from "../Pages";


export const HomeItem=()=>{
    return(
        <>
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