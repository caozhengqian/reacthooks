import React ,{useReducer}from 'react';

import {Input,Button,Row,Col,Icon,Typography,Affix} from 'antd'
import {useAntdButton,useAntdIcon,useAntdTyTitle,useAntdAffix} from './use/useAntd'
import {useFormInput} from './use/useFormInput'
import {useFormButton} from './use/useFormButton'
import {useWindowWidth} from './use/useWindowWidth'


// import {ThemeContext} from "./context/inputContex";
// const ButtonGroup = Button.Group;
export default function Greeting(props) {
    const name = useFormInput();
    const surname = useFormInput();
    const border = useWindowWidth();
    const button = useFormButton([name.value,surname.value,props,'greeting'])


    let [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "Click":
                    return {
                        ...state,
                        isTitle:state.isTitle=action.isTitle,
                    } ;
                case "ChangeTyTitle":
                    return {
                        ...state,
                        tyTitle:action.tyTitle
                    } ;
                case "ChangeHeight":
                    return {
                        ...state,
                        winHeight:action.winHeight
                    } ;
                default:
                    return state;
            }
        },
        {
            isTitle:'title',
            tyTitle:'fdsafsadfddsadfsafdsaffdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfadsfdsafsadfddsadfsafdsafdasfads',
            winHeight:document.body.clientHeight
        }
    );
    window.onresize = function () {
        console.info('abc')
        dispatch({ type: "ChangeHeight",winHeight:document.body.clientHeight});

    }

    const antdButton = useAntdButton(state.isTitle);
    const antdButtona = useAntdButton('aaa');
    const antdIcon = useAntdIcon();
    const antdTyTitle = useAntdTyTitle();
    const antdAffix = useAntdAffix('a',state.winHeight);
    // const antdAffix = useAntdAffix(['a',state.winHeight]);

    return (
        <div>
            <p>greeting</p>
            <Row  type="flex" justify="center" align="bottom">
                <Col span={24}><Button  {...antdButton.attr} onClick={()=>dispatch({ type: "Click",isTitle:'default' })}>Primary</Button></Col>
                <Col span={24}><Button  {...antdButtona.attr} onClick={()=>dispatch({ type: "Click",isTitle:'title' })} >Primary</Button></Col>
                <Col span={24}><Icon {...antdIcon.attr}/></Col>
                <Col span={24 } style={{height:600}} >  {border.width}</Col>
                <Col span={24}>
                    <Typography.Paragraph
                        {...antdTyTitle.attr}>
                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.

                    </Typography.Paragraph>
                </Col>

                <Col span={24}>
                    <Affix {...antdAffix.attr}>
                        <Button {...antdButtona.attr}>Affix top</Button>
                    </Affix>
                </Col>

                <Col span={6}><Row type="flex"  justify="center"><p>+</p></Row></Col>
                <Col span={6}><Row type="flex"  justify="center"><p>-</p></Row></Col>
                <Col span={6}><Row type="flex"  justify="center"><p>*</p></Row></Col>
                <Col span={6}><Row type="flex"  justify="center"><p>%</p></Row></Col>
                <Col span={12}><Input {...name} /></Col>
                <Col span={12}> <Button {...button}/></Col>
                <Col span={24}>  {border.height}</Col><Col span={24}>  {border.height}</Col><Col span={24}>  {border.height}</Col>
                <Col span={24}>  {border.width}</Col>
                <Col span={24}>  {border.width}</Col>
                <Col span={24}>  {border.width}</Col>
                <Col span={24}>  {border.height}</Col>

            </Row>
        </div>
    )
}

