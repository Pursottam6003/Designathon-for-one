import React,{useState, useEffect} from 'react'
import {fs} from '../config/config'
import { Magzine2 } from './Magzine2';

export const FetchData = () => {
    const [blogs, setblogs]=useState([]);
    const getTechnodayaBlogs = async ()=>{
        const blogsarray = []
        for(let i=1;i<=16;i++)
        {
            const blogsFirebase = await fs.collection(`/Technodaya/Blogs/${i}`).get();
            // getting its snapshort 
            for (var snap of blogsFirebase.docs){
                var data = snap.data();
                data.ID = snap.id;
                blogsarray.push({
                    ...data
                })
                // console.log(blogs)
                if(blogsarray.length === blogsFirebase.docs.length){
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
    return (
    <>
        <Magzine2 blogsarray={blogs}/>
    </>
  )
}
