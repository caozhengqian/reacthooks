import React from 'react';

import {Input,Button} from 'antd'

import {useFormInput} from './use/useFormInput'
import {useFormButton} from './use/useFormButton'
import {useDocumentTitle} from './use/useDocumentTitle'



export default function Router1(props) {
    const name = useFormInput('Mary');
    const surname = useFormInput('pop');
    const button = useFormButton([name.value,surname.value,props,'router1'])

    useDocumentTitle(`${name.value } ${surname.value}`);


    return (
        <div>
            <p>router1</p>
            <Input {...name} />
            <Input {...surname} />
            <Button {...button}/>


        </div>
    )
}

