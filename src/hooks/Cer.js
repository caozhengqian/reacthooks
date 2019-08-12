import React ,{Component}from 'react';
import {Button} from 'antd'

import CerIner from './CerIner'

export  default class Cer extends Component{
    constructor(props) {
        super(props);
        this.state = {da:this.props.data};
        console.info('Cer：constructor');
    }

    // shouldComponentUpdate(nextProps, nextState){
    //
    //     console.info('Cer：shouldComponentUpdate');
    //     console.info(nextProps)
    //     console.info(this.props)

        // if(nextProps.data === this.props.data
        //     && nextProps.tdata === this.props.tdata ){
        //     console.info('进入等于')
        //     return false
        // }else{
        //     console.info('进入不等于')
        //     return true
        // }

    // }

    _Click(){
        console.info('Cer Click事件')
        this.setState({da:!this.state.da})
    }

    render(){
        return (
            <div>
                <p>Cer</p>
                <p>{`${this.props.data}`}</p>
                <p>{`${this.state.da}`}</p>


                <Button onClick={() =>this._Click()}>Cer</Button>
                <CerIner/>
            </div>
        )
    }

    componentDidMount(){
        console.info('Cer：componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.info('Cer：getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.info('Cer：componentDidUpdate');
        console.info('Cer：进入刷新后');
        // this.setState({da:this.props.data})
    }

    componentWillUnmount(){
        console.info('Cer：componentWillUnmount');
    }

    static getDerivedStateFromError(error){
        console.info('Cer：getDerivedStateFromError');
    }

    componentDidCatch(error, info){
        console.info('Cer：componentDidCatch');
    }
}


