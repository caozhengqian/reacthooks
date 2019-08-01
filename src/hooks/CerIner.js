import React ,{Component}from 'react';
import Fun from './Fun'
export  default class CerIner extends Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        console.info('CerIner：constructor');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.info('CerIner：shouldComponentUpdate');
        return true;
    }

    render(){
        return (
            <div>
                <p>CerIner</p>
                <Fun/>
            </div>
        )
    }

    componentDidMount(){
        console.info('CerIner：componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.info('CerIner：getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.info('CerIner：componentDidUpdate');
    }

    componentWillUnmount(){
        console.info('CerIner：componentWillUnmount');
    }

    static getDerivedStateFromError(error){
        console.info('CerIner：getDerivedStateFromError');
    }

    componentDidCatch(error, info){
        console.info('CerIner：componentDidCatch');
    }
}


