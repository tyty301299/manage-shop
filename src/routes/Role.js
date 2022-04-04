import React from "react";
import {Route,Switch} from "react-router-dom";

import Cart from "../pages/Cart";
import New from "../pages/New";
import Shirt from "../pages/Skirt";
import Skirt from "../pages/Skirt";
import Dress from "../pages/Dress";
import User from "../pages/User";
import Trousers from "../pages/Trousers";
import Detail from "../pages/Detail";
import Revenue from "../pages/Revenue";
function Role(){
    return(
        <Switch>
            <Route path="/revenue"  component ={Revenue}/>
            <Route path="/" exact component ={New}/>
            <Route path="/detail" component ={Detail}/>
            <Route path="/shirt" component ={Shirt}/>
            <Route path="/skirt" component ={Skirt}/>
            <Route path="/dress" component ={Dress}/>
            <Route path="/trousers" component ={Trousers}/>
            <Route path="/user" component ={User}/>
            <Route path="/cart" component ={Cart}/>
            
        
        </Switch>
    )
}
export default Role