
import {useEffect} from 'react';
export  function useDocumentTitle(initialValue) {
    useEffect(()=>{
       document.title = initialValue;
    });
}