import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  ShortCut } from 'components';
import * as contantActions from 'store/modules/contant';

class BoardContainer extends Component{
    componentWillMount(){
        const { ContantActions, items } = this.props;
        ContantActions.getContantInfo(items);
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
        items: state.contant.items
    }),
    (dispatch) => ({
        ContantActions: bindActionCreators(contantActions, dispatch)
    })
)(BoardContainer);