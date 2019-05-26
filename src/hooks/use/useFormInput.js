import {useState,useContext} from 'react';
import {ThemeContext} from "../context/inputContex";
export  function useFormInput(initialValue) {
    const theme = useContext(ThemeContext)
    const [value,setValue] = useState(initialValue)
    console.info(theme.c);
    function handleChange(e){
        console.info('change');
        setValue(e.target.value);
        fetch("http://localhost:8080/user/getuser",{
            headers:{
                'Content-Type':'application/json;charset=UTF-8'
            },
        }).then(res=>res.json()).then(json=> {
            console.log(json);
        }).catch(error=>{
            console.info(error);
        });
    }
    return {
        value,
        onChange:handleChange,
        style:theme.a
    }
}