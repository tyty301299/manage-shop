import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Route,Switch} from "react-router-dom";
import './User.css'


function User(){
    const [use,setUse] = useState(undefined)
    const [pass,setPass] = useState(undefined)
    const login = () => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
              'email': use,
              'pass': pass,
            })};
      
          fetch('http://127.0.0.1:5000/login', requestOptions)
              .then(response => response.json())
              .then(data => {
                const setjson=JSON.stringify(data);
                localStorage.setItem("user", setjson);
                window.location = '/'
              });
        console.log(use)
        console.log(pass)   
    }
    return(
       
        <div className="container_use">
            <div className="title">
                <div className="span_data">
                <p>ĐĂNG NHẬP</p>
                <div className="custom_table">

                </div>
                </div>
               
            </div>
            <div className="func">
                <from className="form_input"> 
                    <input type="text" name="username" placeholder="Email" className="custom_input" onChange={(e) => {setUse(e.target.value)}}/>
                    <input type="password" name="pass" placeholder="Password" className="custom_input" onChange={(e) => {setPass(e.target.value)}}/>
                 
                </from>
                <Button className="custom_btn" onClick={login}>Đăng Nhập</Button>
                
                </div>
        </div>
    )
}
export default User