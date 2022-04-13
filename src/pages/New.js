import React, {Component, useEffect, useState} from "react";
import { Link, Route,Switch} from "react-router-dom";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import axios from "axios";
import './New.css'
import logo from '../image/logo.png'
import { BsCart2,BsSearch,BsPerson } from "react-icons/bs";
function New(){
    const [posts,setPosts] = useState([])
    useEffect(() => {
        fetch(`http://127.0.0.1:5000`)
        .then(res => res.json())
        .then(res => {
            setPosts(res)
        })
        // axios.get('http://127.0.0.1:5000/').then(res =>{
        //     console.log(res)
        //     setPosts(res.data)
        // }).catch(err=>{
        //     console.log(err)
        // }
        // )
    },[])
    return(
        <div className="container">
            <div id="product">
          
          {
                  posts.map((post,index) =>(
                      
                      <div className="card" key={index}>
                          <Link to={`/detail?id=${post.ID_product}`}>
                          <img src={post.image}/>
                          </Link>
                         <div className="content">
                           <p key={post.ID_product}>{post.price} VNĐ</p>
                           <span key={post.ID_product}>{post.name_product}</span>

                          </div>   
                      </div>
                  ))       
          }
          
      </div>
        </div>
        
    )
}
export default New