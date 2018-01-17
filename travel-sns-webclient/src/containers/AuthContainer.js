import React , { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Welcome } from 'components';
import validate from 'validate.js';
import * as userActions from 'store/modules/user';
import * as authActions from 'store/modules/auth';
import { withRouter } from 'react-router-dom';

class AuthContainer extends Component{
    
    handleKeyPress=(e)=>{
        if(e.key !== 'Enter') return;
        
        const { mode } = this.props;

        if(mode === 'login') {
            this.onLoginhandle();
        }
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
        const { AuthActions, form } = this.props;
        const { email, password } = form.toJS();

        if(email && password){
            AuthActions.localSign({email, password});
        }else{
            console.log(error);
            const error = {
                loginError : "아이디 및 비밀번호를 입력해주세요"
            }
            AuthActions.setError(error);
        }
    }

    onRegisterhandle = () => {
        const { AuthActions, form, error } = this.props;
        const { email, password, nickname } = form.toJS();
        
        const contraints = {
            email: {
                email: {
                    message: "잘못된 형식입니다."
                }
            },
            password : {
                length:{
                    minimum: 6,
                    maximum: 30,
                    tooShort: "최소 6자 이상 입력하여 주세요",
                    tooLong: "최대 30자 입니다"
                }
            }
        }

        const validation = validate(form.toJS(), contraints);

        if(validation){
            console.log('error get');
            AuthActions.setError(validation);
        }else{
            console.log('not error');
            AuthActions.localRegister({email, password, nickname});
        }
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
        const { mode, form, error, history } = this.props;

        const loginInfo = localStorage.getItem("userToken");

        if(loginInfo !== 'undefined'){
            history.push('main');
        }
        
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
                onKeyPress={handleKeyPress}
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
)(withRouter(AuthContainer));

