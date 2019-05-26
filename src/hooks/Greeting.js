import React from 'react';

import {Input,Button} from 'antd'

import {useFormInput} from './use/useFormInput'
import {useFormButton} from './use/useFormButton'
import {useWindowWidth} from './use/useWindowWidth'
import {useDocumentTitle} from './use/useDocumentTitle'



export default function Greeting(props) {
    const name = useFormInput();
    const surname = useFormInput();
    const width = useWindowWidth();
    const button = useFormButton([name.value,surname.value,props,'greeting'])
    useDocumentTitle(`${name.value } ${surname.value}`);

    return (
        <div>
            <p>greeting</p>
            <Input {...name} />
            <Input {...name} />
            <Input />
            <Button {...button}/>
            {width}
        </div>
    )
}

