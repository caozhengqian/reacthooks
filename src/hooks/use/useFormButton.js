import {useContext} from 'react';
export  function useFormButton(initValue) {
    function handleChange(e){

        // console.info(initValue[0])
        // console.info(initValue[1])
        // console.info(initValue[2])
        if(initValue[3] ==='router1'){
            initValue[2].history.push('/greet')
        }else if(initValue[3] ==='greeting'){
            initValue[2].history.push('/router2')
        }else if(initValue[3] ==='router2'){
            console.info('router2');
            initValue[2].history.push('/login')
        }


    }
    return {
        // returnValue:'aaa',
        onClick:handleChange,
    }
}