import React,{useState, useEffect} from 'react'
import {fs} from '../config/config'


export const FetchData= () => {
    const [blogs, setblogs]=useState([]);
    const getblogs = async ()=>{
        const blogs = await fs.collection('Blogs').get();
        const blogposts = [];
        // getting its snapshort 
        for (var snap of blogs.docs){
            var data = snap.data();
            data.ID = snap.id;
            blogposts.push({
                ...data
            })
            // console.log(blogs)
            if(blogposts.length === blogs.docs.length){
              //setting the products
                setblogs(blogposts);
                console.log(blogposts)
            }
        }
    }

    useEffect(()=>{
        FetchData();
    },[])


    return(
    
        <>
        <div>Hello world</div>
        </>
    )
}
 