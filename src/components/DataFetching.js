import axios from "axios";
import React, {Component, useEffect, useState} from "react";
export const DataContext = React.createContext();
function DataFetching(){
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
            console.log(res)
            setPosts(res.data)
        }).catch(err=>{
            console.log(err)
        }
        )
    })
    return(
        <div>
            <ul>
                {
                    posts.map(post => {
                        <li key={post.id}>{post.name}</li>
                    })
                }
            </ul>
        </div>
    );
}
export default DataFetching;