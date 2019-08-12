import  React from 'react';
import  OneTwo from './OneTwo';
import  OneOne from './OneOne';

export default class One  extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            filData: '',
            stocked:false,
        }
        // console.info(this.props.data)
    }
    getOneChangeTextChange(text){
        console.info('getOneChangeTextChange')
        console.info(text.target.value)
        this.setState({filData:text.target.value})
    }

    render(){
        return(
            <>
            <OneOne getOneChangeTextChange={(e)=>this.getOneChangeTextChange(e)}/>
            <OneTwo data={this.props.data} fil={this.state.filData}/>
            </>
        )
   }
}