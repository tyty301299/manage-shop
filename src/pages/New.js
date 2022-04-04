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
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
            console.log(res)
            setPosts(res.data)
        }).catch(err=>{
            console.log(err)
        }
        )
    },[])
    return(
        <div className="container">
            <div id="product">
          
          {
                  posts.map(post =>(
                      
                      <div className="card">
                          <Link to={`/detail?id=${post.id}`}>
                          <img src={logo}/>
                          </Link>
                         <div className="content">
                           <span key={post.id}>1</span>
                          </div>
                          
                         
                      </div>
                  ))       
          }
          
      </div>
        </div>
        
    )
}
export default New