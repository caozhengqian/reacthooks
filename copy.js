import  React from 'react';
// import  OneTwo from './OneTwo';

export default class copy  extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            isActive: false,
        }
        console.info(this.props.data)
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    Change(){
        console.info('kaiak')
    }
    onClick(){
        console.info('onClick')
    }
    render(){
        return(
            <>
                <input type='text' onChange={()=>this.Change()} onClick={()=>this.onClick()}/>
            </>

        )
    }
}