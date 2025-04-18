import React, { useEffect } from 'react';
import {motion,AnimatePresence} from "framer-motion";

const slides=[
    {
        id:1,
        title:"Welcome to HireMeNow",
        subtitle:"Search a job for your future carrier",
        image:"",
    },
    {
        id:1,
        title:"Welcome to HireMeNow",
        subtitle:"Search a job for your future carrier",
        image:"",
    },
    {
        id:1,
        title:"Welcome to HireMeNow",
        subtitle:"Search a job for your future carrier",
        image:"",
    },
];

export default function Heroslider() {

    const [index,setIndex]=useState(0);

    const nextSlide=()=>setIndex((prev)=>(prev+1)%slides.length);
    const prevSlide=()=>setIndex((prev)=>(prev-1+slides.length)%slides.length);

    useEffect(()=>{
        const timer=setInterval(nextSlide,5000);
        return ()=>clearInterval(timer);
    },[]);
  return (
    <div>
      
    </div>
  )
}
