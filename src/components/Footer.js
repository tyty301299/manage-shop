
import React , {useState} from "react";
import { Link } from 'react-router-dom'
import './Footer.css'
import { BsCart2,BsSearch,BsPerson } from "react-icons/bs";
import logo from '../image/logo.png'

function Footer(){
    return( 
        <footer className="Footer">
            <div className="Container">
                <div className="row">
                    <div className="footer-col">
                        <h4>TỔNG ĐÀI HỖ TRỢ</h4>
                        <ul>
                            <li><a href="#">Liên hệ đặt hàng <span>01234567</span> </a> </li>
                            <li><a href="#">Thắt mắc đơn hàng  <span>01234567</span> </a></li>
                            <li><a href="#">Góp ý, khiếu nại  <span>01234567</span> </a></li>
                          
                            
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4> VỀ LPNT </h4>
                        <ul>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Liên hệ</a></li>
                            <li><a href="#">Tuyển dụng</a></li>
                            <li><a href="#">Tin tức</a></li>
                            <li><a href="#">Hệ Thống cửa hàng</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>CHĂM SÓC KHÁCH HÀNG</h4>
                        <ul>
                            <li><a href="#">Chính sách đổi trả</a></li>
                            <li><a href="#">Chính sách bảo hành</a></li>
                            <li><a href="#">Chính sách hoàn tiền</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <img src={logo} className="logo"/>
                        <ul>
                            <li>Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cung LPNT hướng tới tiêu dung năng động, tích cực . </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
      
    );
}
export default Footer