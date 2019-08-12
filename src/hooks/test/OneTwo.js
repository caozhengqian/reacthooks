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
    getOneChangeTextChange(){
        console.info('getOneChangeTextChange')
    }

    render(){
        const fil = this.props.fil;
        const data = this.props.data;
        const rows = [];
        let title = '';
        data.forEach((v,k)=>{
            if(v.name.indexOf(fil) === -1){
                return ;
            }
            if(title !== v.category){
                rows.push(
                    <tr key={v.category}>
                        <th>{v.category}</th>
                    </tr>
                )
            }
            rows.push(
                <tr key={v.name}>
                    <td>{v.name}</td>
                    <td>{v.price}</td>
                </tr>
            )
            title = v.category
        })
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </>
        )
    }
}