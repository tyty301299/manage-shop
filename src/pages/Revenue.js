import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './Revenue.css'
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


function Revenue() {

 const [date,setDate] = useState(new Date())
 const strDate = date.getDate()+"/"+String(date.getMonth()+1)+"/"+date.getFullYear();
 const [posts,setPosts] = useState([])
 const arrdata = []
 const lablebd = []
 const datadb = []
 useEffect(()=>{
     if(localStorage.getItem('user')!=null){
        
         fetch(`http://127.0.0.1:5000/revenue`)
             .then(res => res.json())
             .then(res => {
                 setPosts(res)
             })
     }

 },[])
  posts.forEach(item => {
    if(item.date === strDate){
      arrdata.push(item)
    }
  })
  arrdata.forEach(item => {
    lablebd.push(item.product.name_product)
    datadb.push(item.product.price*item.quantity)
  })

  const [data, setData] = useState({
    datasets: [{
        data: datadb,
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  labels: lablebd, 
});
console.log(arrdata)
console.log(lablebd)
console.log(datadb)
const onchange = date => {
  console.log(strDate)
    setDate(date)
    const test = {
      datasets: [{
          data: datadb,
          backgroundColor:[
            'red',
    
          ]
      },
    ],
    labels: lablebd, 
  }
    setData(test)
};
console.log(posts)
  return (
    <div className='container'>
    <div className="container_first">
        <Calendar onChange={onchange} value={date}/>
        <div className='container_second'>
    <Pie data={data}/>
    
    </div>
    </div>
    <div className='list'>
    {
                 arrdata.map(post =>(
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
                      <p className="titlesecond">Địa chỉ : {post.user.adders}</p>
                      <p>Số điện thoại : {post.user.SDT}</p>
    
                    </div>
                    <div className="func_button">
                       <p>{strDate}</p>
                    </div>
                </div>
                ))
            }
    </div>
   
    </div>
   
  );
}

export default Revenue;