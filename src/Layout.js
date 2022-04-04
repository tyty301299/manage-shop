import React , {useState} from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Role from "./routes/Role";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout(){
    
    return(
       <BrowserRouter>
      
           <Route render={props => (
               <div>
                  <div>
                     <Header {...props}/>
                  </div>
                 
                    <Role/>
                 
                  <div>
                      <Footer/>
                  </div>
               </div>
           )}/>
       </BrowserRouter>
    );
}
export default Layout