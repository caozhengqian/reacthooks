import  React from 'react';
// import  OneTwo from './OneTwo';

export default class OneTwo  extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
        }
        console.info(this.props.data)
    }
    Change(){
        console.info('kaiak')
    }

    render(){

        return(
            <input type='text' onChange={()=>this.Change()}/>

        )
    }
}