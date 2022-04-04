import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Route,Switch} from "react-router-dom";
import './User.css'


function User(){
    const [use,setUse] = useState(undefined)
    const [pass,setPass] = useState(undefined)
    const login = () => {
       
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