import React,{useState, useEffect} from 'react'
import {fs} from '../config/config'
import { Magazine } from './Magazine';

const year = new Date().getFullYear();
let MonthName;
const month = new Date().getMonth();

const BiMonthlyNames = [
    '',
    'JanFeb',
    'MarApril',
    'MayJune',
    'JulyAug',
    'SeptOct',
    'NovDec',
  ]

if(month ===1 || month ===2) MonthName=BiMonthlyNames[1];
else if(month===3 || month ===4) MonthName=BiMonthlyNames[2];
else if(month===5 || month ===6) MonthName=BiMonthlyNames[3];
else if(month===7 || month ===8) MonthName=BiMonthlyNames[4];
else if(month===9 || month ===10) MonthName=BiMonthlyNames[5];
else if(month===11 || month ===12) MonthName=BiMonthlyNames[6];
export const FetchData = () => {
    const [blogs, setblogs]=useState([]);
    const getTechnodayaBlogs = async ()=>{
        const blogsarray = []
        for(let i=1;i<=17;i++)
        {
            const blogsFirebase = await fs.collection(`${year}/${MonthName}/${i}`).get();
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
        <Magazine blogsarray={blogs}/>
    </>
  )
}
