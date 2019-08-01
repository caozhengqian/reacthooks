import React ,{Component}from 'react';

import ConIner from './ConIner'

export  default class Con extends Component{
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
        console.info('Con：constructor');
        this.handleChange = this.handleChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.info('Con：shouldComponentUpdate');
        return true;
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render(){
        return (
            <div>
                <p>Con</p>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">酸橙</option>
                    <option value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
                <ConIner/>
            </div>
        )
    }

    componentDidMount(){
        console.info('Con：componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.info('Con：getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.info('Con：componentDidUpdate');
    }

    componentWillUnmount(){
        console.info('Con：componentWillUnmount');
    }

    static getDerivedStateFromError(error){
        console.info('Con：getDerivedStateFromError');
    }

    componentDidCatch(error, info){
        console.info('Con：componentDidCatch');
    }
}


