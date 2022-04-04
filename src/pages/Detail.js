import React, {Component, useEffect, useState} from "react";
import { Route,Switch,Link, useLocation} from "react-router-dom";
import axios from "axios";
import './Detail.css'
import { Button } from "react-bootstrap";
import logo from '../image/logo.png'
function Detail(){
  const {pathname} = useLocation()
  const size_sml =["S","M","L"]
  const [zize,setZize] = useState(undefined)
  const [color,setColor] = useState("Trắng")
  const arrary_color = ["Xanh","Nâu","Trắng"]
  const activeSize = size_sml.findIndex(e => e.path === pathname);
  const [posts,setPosts] = useState([])
  const Color = color;
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
         setZize(undefined)
          setPosts(res.data)
      }).catch(err=>{
        
      }
      )
  },[])
  
   const t = new URLSearchParams(window.location.search)
   const id = parseInt(t.get('id'))
   var data;
    for(var i=0;i<posts.length;i++){
      if(posts[i].id === id){
        data = posts[i]  
      }
      else{
      
      }
    }
    const boxclick = (e) => {
        if(e === "S"){
          console.log("*")
        }
    }
    return(
        <div className="container">
          
         <div className="data_image">
              <img src={logo}/>
         </div>
         <div className="datatext">
              <h3>ĐẦM MINI 2 DÂY CỔ KHOÉT V</h3>
              <h3>SKU: HNDLU022</h3>
              <h3>500,000₫</h3>
              <div className="oder_data">
              <h3>{color}</h3>
              <div className="container_ecli">
                {
                  arrary_color.map(item =>(
                    <div className="ecli_color" onClick={() => setColor(item)}>
                      
                    </div>
                  ))
                }
             
             
              </div>
              <div className="container_ecli">
                {
                  size_sml.map(item => (
                    <div key={item} className={`size_card${zize === item ? 'active' : ''}`} onClick={() => setZize(item)}>
                    <span>{item}</span>
                    </div>
                  ))
                }
              </div>
              <Link to={{
                pathname: '/cart',
                query: {Color}
              }}>About</Link>
              </div>
         </div>
        
        </div>
    )
}

export default Detail