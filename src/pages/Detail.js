import React, {Component, useEffect, useState} from "react";
import { Route,Switch,Link, useLocation} from "react-router-dom";
import axios from "axios";
import { BsPlusLg, FaRegWindowMinimize} from "react-icons/bs";
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
  const [number,setNumber] = useState(1)
  const Color = color;
  const t = new URLSearchParams(window.location.search)
  const id = parseInt(t.get('id'))
  useEffect(() => {
      axios.get(`http://127.0.0.1:5000/detail/${id}`).then(res =>{
         setZize(undefined)
          setPosts(res.data)
      }).catch(err=>{
        alert('connect error')
      }
      )
  },[])
  
 
   var data;
    
    const boxclick = (e) => {
        if(e === "S"){
          console.log("*")
        }
    }
    const get_time_now = () =>{
        const a = new Date()
        var result = ""
        result += a.getDate() + "/" + (a.getMonth()+1) + "/" +a.getFullYear()
        return result
    }
    const add_cart=()=>{
      if(localStorage.getItem('user')!=null){
        const obj=JSON.parse(localStorage.getItem('user'));
        const requestOptions = {
          method: 'POST',
          body: JSON.stringify({

            'date': get_time_now(),
            'size': zize,
            'color': color,
            'status': 1,
            'quantity': number,
            'ID_user': obj["ID_user"],
            'ID_product': id,
          })};
    
        fetch('http://127.0.0.1:5000/cart', requestOptions)
            .then(response => response.json())
            .then(data => {
              if(data["message"] == "1"){
                alert("da them thanh cong")
              }
              else {
                alert("them that bai")
              }
            });
      }
      else{
        alert("Vui lòng đăng nhập ")
        window.location = "http://localhost:3000/user"
      }
      get_time_now()
      console.log(color)
      console.log(zize)
      console.log(number)
      console.log(posts.ID_product)
    }
    return(
        <div className="containerdetail">
          
         <div className="data_image">
              <img src={posts.image}/>
         </div>
         <div className="datatext">
              <h3>{posts.name_product}</h3>
              <h3>{posts.ID_product}</h3>
              <h3>{posts.price} VNĐ</h3>
              <div className="oder_data">
              <h3>{color}</h3>
              <div className="container_ecli">
                {/* {
                  arrary_color.map(item =>(
                    <div className="ecli_color" onClick={() => setColor(item)}>
                      
                    </div>
                  ))
                } */}
                    <div className="ecli_color_first" style={{backgroundColor:"#B8C9D7"}}onClick={() => setColor("xanh")}>
                      
                      </div>
                      <div className="ecli_color" style={{backgroundColor:"#E1DBCC"}} onClick={() => setColor("Nâu")}>
                      
                      </div>
                      <div className="ecli_color" style={{backgroundColor:"#FFFFFF"}} onClick={() => setColor("Trắng")}>
                      
                      </div>
             
             
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
              <div className="container_ecli">
                <div className="size_card" onClick={() =>setNumber(number-1)}>
                  -
                </div>
                <div className="size_card">
                  {number}
                </div>
                <div className="size_card" onClick={() => setNumber(number+1)}>
                  <BsPlusLg/>
                </div>
              </div>
              <Button className="custom_button" onClick={add_cart}>Add Cart</Button>
              </div>
              <div className="container_ecli_tmp">
              <h3>THỬ NGAY TẠI SHOWROOMS</h3>
              <p>Miêu tả : {posts.type}</p>
              <p>Đặt tính : {posts.charact}</p>
              <p>Chất liệu : {posts.material}</p>
              <p>Lưu ý : {posts.note}</p>
              <h3>Hướng dẫn bảo quản</h3>
              <p>- Giặt tay bằng nước lạnh</p>
              <p>- Không ngâm, không tẩy</p>
              <p>- Giặt riêng các sản phẩm khác màu</p>
              <p>- Không vắt. </p>
              <p>- Là ủi ở nhiệt độ thấp. Khuyến khích giặt khô.</p>
              </div>
         </div>
        
        </div>
    )
}

export default Detail