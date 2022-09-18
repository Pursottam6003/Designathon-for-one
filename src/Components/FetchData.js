import React,{useState, useEffect} from 'react'
import {fs} from '../config/config'
import { Items } from './Items';

export const FetchData = () => {
    const [blogs, setblogs]=useState([]);
    const getTechnodayaBlogs = async ()=>{
        
        const blogsarray = [];
        for(let i=1;i<=16;i++)
        {
            const blogs = await fs.collection(`/Technodaya/Blogs/${i}`).get();
            // getting its snapshort 
            for (var snap of blogs.docs){
                var data = snap.data();
                data.ID = snap.id;
                blogsarray.push({
                    ...data
                })
                // console.log(blogs)
                if(blogsarray.length === blogs.docs.length){
                  //setting the products
                    setblogs(blogsarray);
                  
                }
            }  
        }
        console.log(blogsarray)
    }

    useEffect(()=>{
        getTechnodayaBlogs();
    },[])

    console.log('hello')
  
    return (
    <>
        <h1>Demo fetching data</h1>
    </>
  )
}
