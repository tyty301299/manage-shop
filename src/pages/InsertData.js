import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Route,Switch , useParams , useLocation} from "react-router-dom";
import './InsertData.css'

function InsertData(){
    const[name,setName] = useState()
    const[image,setImage] = useState()
    const[charact,setCharact] = useState()
    const[type,setType] = useState()
    const[material,setMaterial] = useState()
    const[note,setNote] = useState()
    const[price,setPrice] = useState()
    const InsertData = () => {
       
            if(localStorage.getItem('user')!=null){
              const obj=JSON.parse(localStorage.getItem('user'));
              const requestOptions = {
                method: 'POST',
                body: JSON.stringify({
                   'image':image,
                   'name_product': name,
                   'charact':charact,
                   'type':type,
                   'material':material,
                   'note':note,
                   'price':price,
                })};
          
              fetch('http://127.0.0.1:5000/insertdata', requestOptions)
                  .then(response => response.json())
                  .then(data => {
                    if(data["message"] == "1"){
                      alert("da them thanh cong")
                      window.location = "http://localhost:3000"
                    }
                    else {
                      alert("them that bai")
                    }
                  });
            }
            else{
                
            }
            console.log(image)
          
          
    }
    return(
        <div style={{textAlign:'center'}}>
           <div className="div_insert">
               
           <from className="form_input"> 
                  <table className="table_layout">
                      <tr>
                          <td>
                            Tên sản phẩm :
                          </td>
                          <td>
                           <input type="text" className="input_text" onChange={(e) => {setName(e.target.value)}}/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                            Hình Ảnh :
                          </td>
                          <td>
                          <input type="text" className="input_text" onChange={(e) => {setImage(e.target.value)}}/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                            Đặc Tính :
                          </td>
                          <td>
                          <input type="text" className="input_text" onChange={(e) => {setCharact(e.target.value)}}/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          Thể Loại :
                           
                          </td>
                          <td>
                          <input type="text" className="input_text" onChange={(e) => {setType(e.target.value)}}/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          Chất Liệu :
                          
                          </td>
                          <td>
                          <input type="text" className="input_text" onChange={(e) => {setMaterial(e.target.value)}}/>
                          </td>
                      </tr>
                      <tr>
                          <td>  Lưu ý :
                            
                          </td>
                          <td>
                          <input type="text" className="input_text" onChange={(e) => {setNote(e.target.value)}}/>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          Giá Thành :
                          </td>
                          <td>
                          <input type="text" className="input_text" onChange={(e) => {setPrice(e.target.value)}}/>
                          </td>
                      </tr>
                      <tr>
                          <td colSpan={2}>
                          <Button className="btn_insert" onClick={InsertData}>Thêm</Button>
                          </td>
                      </tr>
                     
                  </table>
                 
            </from>
           </div>
          
        </div>
    )
}
export default InsertData