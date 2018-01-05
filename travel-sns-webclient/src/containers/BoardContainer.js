import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  ShortCut } from 'components';
import * as contantActions from 'store/modules/contant';

class BoardContainer extends Component{
    componentWillMount(){
        //ContantActions.getContantInfo();
    }
    handleClickContant=(e)=>{
        const { history, data } = this.props;
        const { _id } = data;

        //ConstantActions.getContant();
    }
    render(){
        const { data } = this.props;
        return(
            <ShortCut data={data}/>
        )
    };
}

export default connect(
    (state) => ({
        data: state.contant.data
    }),
    (dispatch) => ({
        ContantActions: bindActionCreators(contantActions, dispatch)
    })
)(BoardContainer);