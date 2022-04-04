import { useEffect, useState } from 'react';
import './Revenue.css';
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

 const strDate = date.getDate() +"/"+String(date.getMonth()+1) + "/" +date.getFullYear();

  const [data, setData] = useState({
    datasets: [{
        data: [Number(date.getDate())*10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  labels: [
      '1',
      '2',
      '3'
  ], 
});
console.log(data);
const onchange = date => {
  console.log(strDate)
    setDate(date)
    const test = {
      datasets: [{
          data: [Number(date.getDate())*10, 20, 30],
          backgroundColor:[
            'red',
            'blue',
            'yellow'
          ]
      },
    ],
    labels: [
        '1',
        '2',
        '3'
    ], 
  }
    setData(test)
};

//   useEffect(()=> {
//     const fetchData = () =>  {
//       fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
//         const res = data.json();
//         return res
//       }).then((res) => {
//         console.log("resss", res)
//         const label = [];
//         const data = [];
//         for(var i of res) {
//             label.push(i.name);
//             data.push(i.id)
//         }
//         setData(
//           {
//             datasets: [{
//                 data:data,
//                 backgroundColor:[
//                   'red',
//                   'blue',
//                   'yellow'
//                 ]
//             },
//           ],
//           labels:label, 
//         }
//         )

//       }).catch(e => {
//         console.log("error", e)
//       }) 
//     }
//   fetchData();
//   }, [])
  return (
    <div className='container'>
 <div className="container_first">
        <Calendar onChange={onchange} value={date}/>
        <div className='container_second'>
    <Pie data={data}/>
    </div>
    </div>

    </div>
   
  );
}

export default Revenue;