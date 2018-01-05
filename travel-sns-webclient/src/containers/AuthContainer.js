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
        const { UserActions } = this.props;
        UserActions.setLoginForm();
    }

    onResisterClickhandle = (e) => {
        const { UserActions } = this.props;
        UserActions.setAuthForm();
    }

    onPrevClickhandle = (e) =>{
        const { UserActions } = this.props;
        UserActions.setInitForm();
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
        const { mode } = this.props;
        return(
            <Welcome
                onLoginClickhandle={onLoginClickhandle}
                onResisterClickhandle={onResisterClickhandle}
                onPrevClickhandle={onPrevClickhandle}
                onLoginhandle={onLoginhandle}
                onChangeInput={onChangeInput}
                mode={mode}
            />
        )
    }
}

export default connect(
    (state) => ({
        mode: state.user.mode
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(AuthContainer);