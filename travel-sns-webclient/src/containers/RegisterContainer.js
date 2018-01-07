import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Join } from 'components';
import { createAction } from 'redux-actions';
import * as userActions from 'store/modules/user';

class RegisterContainer extends Component{
    onChange = (e) => {
        const { userActions } = this.props;
        const { name, value } = e.target;

        //UserActions.localRegister(name, value);
    }

    render(){
        const { onChange } = this;
        const { error } = this.props;
        const { email, checkpassword, nickname } = error;
        return(
            <Join
                onChangehandle={onChange}
            />
        )
    }
}

export default connect(
    (state) => ({
        email : state.form.email,
        password : state.form.password,
        password2 : state.form.password2,
        nickname : state.Nickname
    }),
    (dispatch) => ({
        UserAction: bindActionCreators(userActions, dispatch)
    })
)(RegisterContainer);