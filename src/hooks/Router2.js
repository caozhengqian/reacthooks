import React ,{Component}from 'react';
import {Button} from 'antd'

import Con from './Con';
import Cer from './Cer';
import FilterableProductTable from './FilterableProductTable'

export  default class Router2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isClick:true,
            toCer:{a:'b',c:{a:'b',d:{a:'b',cc:{ccc:'bbb'}}}},
            // toCer:false,
            tdata:{a:'b',c:{a:'b',d:{a:'b',cc:{ccc:'bbb'}}}},
            // date: new Date()
        };
        console.info('Router2：constructor');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.info('Router2：shouldComponentUpdate');
        return true;
    }
    _Click(){
        console.info('afadsfsafasdfas')
        this.setState({isClick:!this.state.isClick})
    }
    // tick() {
    //     this.setState({
    //         date: new Date()
    //     });
    // }

    render(){
        const PRODUCTS = [
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
        ];
        return (
            <div>
                <p>router22222</p>
                {/*<h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/}
                <FilterableProductTable products={PRODUCTS}/>
                <h2>It is .</h2>
                <Con/>
                <Cer data={this.state.toCer} tdata={this.state.tdata}  Click={()=>this._Click()}/>
                <Cer data={this.state.isClick} Click={()=>this._Click()}/>
                <Button onClick={() =>this._Click()}/>
            </div>
         )
    }

    componentDidMount(){
        console.info('Router2：componentDidMount');
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.info('Router2：getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.info('Router2：componentDidUpdate');
    }

    componentWillUnmount(){
        console.info('Router2：componentWillUnmount');
        clearInterval(this.timerID);
    }

    static getDerivedStateFromError(error){
        console.info('Router2：getDerivedStateFromError');
    }

    componentDidCatch(error, info){
        console.info('Router2：componentDidCatch');
    }
}


