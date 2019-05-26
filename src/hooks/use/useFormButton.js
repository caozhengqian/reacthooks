import {useContext} from 'react';
import {ThemeContext} from "../context/inputContex";
export  function useFormButton(initValue) {
    const theme = useContext(ThemeContext)
    function handleChange(e){

        // console.info(initValue[0])
        // console.info(initValue[1])
        // console.info(initValue[2])
        if(initValue[3] ==='router1'){
            initValue[2].history.push('/greet')
        }else if(initValue[3] ==='greeting'){
            initValue[2].history.push('/Router2')
        }

    }
    return {
        onClick:handleChange,
        style:theme.a
    }
}