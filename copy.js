import  React from 'react';
// import  OneTwo from './OneTwo';

export default class copy  extends React.Component{
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

    onChange(){
        console.info('onChange')
    }
    onClick(){
        console.info('onClick')
    }
    render(){
        const data = [];
        data.forEach((v,k)=>{

        })
        data.map((v,k)=>{

        })
        return(
            <>
                <input type='text' onChange={()=>this.onChange()} onClick={()=>this.onClick()}/>
            </>

        )
    }
}