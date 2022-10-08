import React, { useState, useEffect } from 'react'
import { fs } from '../config/config'
import { Items } from './Items';


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

if (month === 1 || month === 2) MonthName = BiMonthlyNames[1];
else if (month === 3 || month === 4) MonthName = BiMonthlyNames[2];
else if (month === 5 || month === 6) MonthName = BiMonthlyNames[3];
else if (month === 7 || month === 8) MonthName = BiMonthlyNames[4];
else if (month === 9 || month === 10) MonthName = BiMonthlyNames[5];
else if (month === 11 || month === 12) MonthName = BiMonthlyNames[6];

export const ShowBlogs = () => {
    const [blogs, setblogs] = useState([]);
    const getTechnodayaBlogs = async () => {
        const blogsArray = [];
        for (let i = 1; i <= 17; i++) {
            const blogs = await fs.collection(`${year}/${MonthName}/${i}`).get();
            console.log(i, blogs.docs.length)

            // getting its snapshort 
            for (var snap of blogs.docs) {
                var data = snap.data();
                data.ID = snap.id;
                blogsArray.push({
                    ...data
                })
                // console.log(myproducts)
                if (blogsArray.length === blogs.docs.length) {
                    //setting the products
                    setblogs(blogsArray);
                }
            }
        }
        console.log(blogsArray)

    }

    useEffect(() => {
        getTechnodayaBlogs();
    }, [])

    return (
        <>
            {blogs.length > 0 && (
                <div className='my-products'>

                    
                    <div className='all-news'>
                        
                        <div className='news-block'>


                            <Items blogsArray={blogs} />
                        </div>
                    </div>
                </div>
            )}

            {blogs.length < 1 && (
                <div className='my-products please-wait'>Please wait...</div>
            )}
        </>
    )
}