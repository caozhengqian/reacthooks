import  React from 'react';
// import  OneTwo from './OneTwo';

export default class OneOne  extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            // isActive: false,
        }
        // console.info(this.props.data)
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render(){
        return(
            <>
                <input type='text'  onChange={(e)=>this.props.getOneChangeTextChange(e)} />
            </>

        )
    }
}