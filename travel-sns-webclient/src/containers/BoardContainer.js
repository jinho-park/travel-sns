import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  ShortCut } from 'components';
import * as contantActions from 'store/modules/contant';
import * as userActions from 'store/modules/user';

class BoardContainer extends Component{
    componentWillMount(){
        const { ContantActions, items, isLogin } = this.props;

        if(isLogin){
            ContantActions.getContantInfo(items);
        }
    }
    handleClickContant=(e)=>{
        const { history, items } = this.props;
        const { _id } = items;

        //ConstantActions.getContant();
    }
    render(){
        const { items } = this.props;

        return(
            <ShortCut data={items}/>
        )
    };
}

export default connect(
    (state) => ({
        items: state.contant.get('items'),
        isLogin: state.user.get('isLogin')
    }),
    (dispatch) => ({
        ContantActions: bindActionCreators(contantActions, dispatch),
        UserActions : bindActionCreators(userActions, dispatch)
    })
)(BoardContainer);