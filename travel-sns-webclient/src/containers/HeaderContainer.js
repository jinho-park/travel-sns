import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header } from 'components';
import * as userActions from 'store/modules/user';

class HeaderContainer extends Component{
    componentDidMount(){
        const { user } = this.props;

    }

    render(){
        const { user } = this.props;

        return(
            <Header user={user}/>
        )
    }
}

export default connect(
    (state) => ({
        userNickname: state.user.userNickname,
        isLogin: state.user.isLogin,
        userCode: state.user.userCode
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderContainer);