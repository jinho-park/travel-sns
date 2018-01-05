import React , { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Welcome, Login, Join, Choice } from 'components';
import * as userActions from 'store/modules/user';

class AuthContainer extends Component{
    
    handleKeyPress=(e)=>{
        if(e.key !== 'enter') return;

    }

    onLoginClickhandle = (e) =>{
        if(e.handleKeyPress) return <Choice ds_off />;
        
    }

    onResisterClickhandle = (e) => {
        <Choice ds_off />
        //<Join/>
    }

    onPrevClickhandle = (e) =>{


    }

    onLoginhandle = (e) => {

    }

    onChangeInput = (e) => {
        
    }

    render(){
        const {
            handleKeyPress,
            onLoginClickhandle,
            onResisterClickhandle,
            onPrevClickhandle,
            onLoginhandle,
            onChangeInput
        } = this;
        return(
            <Welcome
                onLoginClickhandle={onLoginClickhandle}
                onResisterClickhandle={onResisterClickhandle}
                onPrevClickhandle={onPrevClickhandle}
                onLoginhandle={onLoginhandle}
                onChangeInput={onChangeInput}
            />
        )
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(AuthContainer);

