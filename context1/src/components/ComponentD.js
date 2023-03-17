import React from 'react';
import {EmpContext} from '../App';

class ComponentD extends React.Component{
    render(){
        return(
            <EmpContext>
                {username =>{
                    return <div>Hello {username} </div>
                }}
            </EmpContext>
        )
    }
}
export default ComponentD;