import {useState,useEffect} from 'react';
export  function useWindowWidth() {
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);
   useEffect(()=>{
       const handle=()=> {
           setWidth(window.innerWidth);
           setHeight(window.innerHeight);
       }

       window.addEventListener('resize',handle);
        return ()=>{
            window.removeEventListener('resize',handle)
        };
   });
   return {
       width:width,
       height:height
   };
}