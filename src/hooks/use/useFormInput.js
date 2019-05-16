import {useState,useContext} from 'react';
import {ThemeContext} from "../context/inputContex";
export  function useFormInput(initialValue) {
    const theme = useContext(ThemeContext)
    const [value,setValue] = useState(initialValue)
    function handleChange(e){
        setValue(e.target.value);
        console.info('useFormInput')
    }
    return {
        value,
        onChange:handleChange,
        style:theme.a
    }
}