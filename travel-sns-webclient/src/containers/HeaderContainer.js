import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header } from 'components';
import * as userActions from 'store/modules/user';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends Component{
    componentWillMount(){
        const { userNickname, UserActions } = this.props;
        const token = localStorage.getItem("userToken");

        const data = {
            accessToken : token
        };

        UserActions.getUser(data);
    }

    onLogouthandle = ()=>{
        const { history, UserActions } = this.props;

        UserActions.userSignout();
        history.push('/');
    }

    onSettinghandle = () => {
        const { history } = this.props;

        history.push('/');
    }

    render(){
        const { userNickname } = this.props;
        const {
            onLogouthandle
        } = this;

        return(
            <Header 
                user={userNickname}
                onLogouthandle={onLogouthandle}
            />
        )
    }
}

export default connect(
    (state) => ({
        userNickname: state.user.get('userNickname'),
        isLogin: state.user.get('isLogin')
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(withRouter(HeaderContainer));