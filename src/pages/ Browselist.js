import React , {useEffect, useState}from "react";
import { Button } from "react-bootstrap";
import { Route,Switch , useParams , useLocation} from "react-router-dom";
import logo from '../image/logo.png'
import './Browselist.css'

function Browselist(){
    const [posts,setPosts] = useState([])
    useEffect(() => {
        if(localStorage.getItem('user')!=null){
            const obj=JSON.parse(localStorage.getItem('user'));
            fetch(`http://127.0.0.1:5000/browselist`)
                .then(res => res.json())
                .then(res => {
                    setPosts(res)
                })
        }
    },[])
    const insertBD = (tmp) => {
      
        const requestOptions = {
          method: 'PUT',
          body: JSON.stringify({
            'ID_order': tmp,
          })};
          fetch('http://127.0.0.1:5000/update', requestOptions)
          .then(response => response.json())
          .then(data => {
            if(data["message"] == "1"){
              alert("duyet thanh cong")
            }
            else {
              alert("duyet that bai")
            }
          });
    }
    const deleteBD = (tmp) => {
        const requestOptions = {
            method: 'DELETE',
            body: JSON.stringify({
              'ID_order': tmp,
            })};
            fetch('http://127.0.0.1:5000/delete', requestOptions)
            .then(response => response.json())
            .then(data => {
              if(data["message"] == "1"){
                alert("da xoa thanh cong")
              }
              else {
                alert("xoa that bai")
              }
            });
    }
    return(
        <div>
            {
                 posts.map(post =>(
                 
                    
                    <div className="container_list">
                    <div className="iamge_list">
                    <img src={post.product.image} className="image_creter"/>
                    </div>
                    <div className="goods">
                          <p className="titlefirst">{post.product.name_product}</p>
                          <p className="titlesecond">{post.color} / {post.size}</p>
                          <p>{post.quantity} / {post.price}</p>
                    </div>
                    <div className="customer">
                      <p className="titlefirst">{post.user.name}</p>
                      <p className="titlesecond">{post.user.adders}</p>
                      <p>so dien thoai : {post.user.SDT}</p>
    
                    </div>
                    <div className="func_button">
                        <button className="button_list" onClick={() => insertBD(post.ID_order)}>XÁC NHẬN</button>
                        <button  className="button_list" style={{backgroundColor:'#FF2F37'}} onClick={() => deleteBD(post.ID_order)}>XOÁ</button>
                    </div>
                </div>
                ))
            }
           
           
           
        </div>
    )
}
export default Browselist