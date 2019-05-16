import React,{useContext} from 'react';

import {Input} from 'antd'

import {useFormInput} from './use/useFormInput'
import {useWindowWidth} from './use/useWindowWidth'
import {useDocumentTitle} from './use/useDocumentTitle'



export default function Greeting(props) {
    const name = useFormInput('Mary');
    const surname = useFormInput('pop');
    const width = useWindowWidth();

    useDocumentTitle(`${name.value } ${surname.value}`);

    // console.info(theme)
    console.info(name)
    return (
        <div>
            <Input {...name} />
            <Input {...name} />
            <Input />
            {width}
        </div>
    )
}

