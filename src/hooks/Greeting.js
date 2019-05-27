import React ,{useContext}from 'react';

import {Input,Button,Row,Col} from 'antd'

import {useFormInput} from './use/useFormInput'
import {useFormButton} from './use/useFormButton'
import {useWindowWidth} from './use/useWindowWidth'
import {useDocumentTitle} from './use/useDocumentTitle'

import {ThemeContext} from "./context/inputContex";

export default function Greeting(props) {
    const name = useFormInput();
    const surname = useFormInput();
    const width = useWindowWidth();
    const button = useFormButton([name.value,surname.value,props,'greeting'])
    useDocumentTitle(`${name.value } ${surname.value}`);
    const theme = useContext(ThemeContext)
    console.info(theme.c)
    return (
        <div>
            <p>greeting</p>
            <Row  type="flex" justify="center" align="bottom">
                <Col span={24}><Input {...name}  /></Col>

                <Col span={6} >  <Row type="flex"  justify="center"><p>+</p></Row></Col>
                <Col span={6}><Row type="flex"  justify="center"><p>-</p></Row></Col>
                <Col span={6}><Row type="flex"  justify="center"><p>*</p></Row></Col>
                <Col span={6}><Row type="flex"  justify="center"><p>%</p></Row></Col>
                <Col span={12}><Input {...name} /></Col>
                <Col span={12}> <Button {...button}/></Col>
                <Col span={12}>  {width}</Col>
            </Row>


        </div>
    )
}

