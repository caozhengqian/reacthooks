import React ,{Component}from 'react';
import Fun from './Fun'
export  default class ConIner extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            num : 10,
        };
        console.info('ConIner：constructor');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.info('ConIner：shouldComponentUpdate');
        return true;
    }

    render(){
        return (
            <div>
                <p>ConIner3333333333333</p>
                {this.state.num < 9 && <p>num条件满足</p>}
                <Fun/>
            </div>
        )
    }

    componentDidMount(){
        console.info('ConIner：componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.info('ConIner：getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.info('ConIner：componentDidUpdate');
    }

    componentWillUnmount(){
        console.info('ConIner：componentWillUnmount');
    }

    static getDerivedStateFromError(error){
        console.info('ConIner：getDerivedStateFromError');
    }

    componentDidCatch(error, info){
        console.info('ConIner：componentDidCatch');
    }
}


