import React , { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Welcome } from 'components';
import * as userActions from 'store/modules/user';
import * as authActions from 'store/modules/auth';

class AuthContainer extends Component{
    
    handleKeyPress=(e)=>{
        if(e.key !== 'enter') return;
        
        const { mode } = this.props;

        if(mode === 'login') this.onLoginhandle;
        else this.onResisterhandle;
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

    onLoginhandle = () => {

    }

    onRegisterhandle = () => {
        const { AuthActions, form, error } = this.props;
        const { email, password, nickname } = form.toJS();
        
        const contraints = {
            email: {
                email: {
                    
                }
            }
        }
        AuthActions.localRegister({email, password, nickname});
    }

    onChangeInput = (e) => {
        const { AuthActions, form } = this.props;
        const { name, value } = e.target;
        
        AuthActions.setInput({name, value});
    }

    render(){
        const {
            handleKeyPress,
            onLoginClickhandle,
            onResisterClickhandle,
            onPrevClickhandle,
            onLoginhandle,
            onChangeInput,
            onRegisterhandle
        } = this;
        const { mode, form, error } = this.props;
        
        return(
            <Welcome
                onLoginClickhandle={onLoginClickhandle}
                onResisterClickhandle={onResisterClickhandle}
                onPrevClickhandle={onPrevClickhandle}
                onLoginhandle={onLoginhandle}
                onChangeInput={onChangeInput}
                onRegisterhandle={onRegisterhandle}
                mode={mode}
                form={form}
                error={error}
            />
        )
    }
}

export default connect(
    (state) => ({
        mode: state.user.get('mode'),
        error: state.auth.get('error'),
        form : state.auth.get('form')
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch),
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(AuthContainer);

