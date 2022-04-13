import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Route,Switch , useParams , useLocation} from "react-router-dom";
import logo from '../image/logo.png'
import axios from "axios";
import { FiX } from "react-icons/fi";
import './Cart.css'

function Cart(){
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        if(localStorage.getItem('user')!=null){
            const obj=JSON.parse(localStorage.getItem('user'));
            fetch(`http://127.0.0.1:5000/cart/${obj['ID_user']}`)
                .then(res => res.json())
                .then(res => {
                    setPosts(res)
                })
        }
        
    },[])

    var tien = 0;
    posts.forEach(item => {
        tien = tien + (item.product.price*item.quantity)
    
    })


    return(
        <div className="containercart">
            <div className="thanhtoan">
                <div className="thanhtoancon">
                    <div className="container_button_cart">
                   
                    <span>Tổng số tiền : {tien} VND</span>
                    </div>
                   
                    <div className="container_button_cart">
                    <Button className="button_cart" onClick={() => ( window.location = "http://localhost:3000")}>Mua Thêm</Button>
                    <Button className="button_cart" onClick={() => ( window.location = "http://localhost:3000")}>Thanh Toan</Button>
                    </div>
                  
                </div>
            </div>
            <div className="listsp">
               {
                    posts.map(post => (
                        <div className="item_cart">
                        <div className="imageclass">
                            <img src={post.product.image}/>
                        </div>
                        <div className="item_sp">
                            <p>{post.product.name_product}</p>
                           
                            <p>{post.product.color} / {post.size}</p>
                           
                            <p>{post.product.price} / {post.quantity}</p>
                            
                        </div>
                        <div className="item_cancle">
                          
                        <FiX onClick={() => alert("jihi")}/>
                        </div>
                    </div>
                    ))
               }
               

            </div>
        </div>
    )
}
export default Cart