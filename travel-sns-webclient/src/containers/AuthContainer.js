import React , { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Welcome } from 'components';
import * as userActions from 'store/modules/user';

class AuthContainer extends Component{
    
    handleKeyPress=(e)=>{
        if(e.key !== 'enter') return;

    }

    onLoginClickhandle = (e) =>{

    }

    onResisterClickhandle = (e) => {

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

