import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect }from 'react-redux';
import { CreatePageTemplate, Header } from 'components';
import * as createActions from 'store/modules/create';
import { createAction } from 'redux-actions';

class CreateContainer extends Component{
    onDeletehandle = (e) =>{
        
    }

    onAddhandle = (e) => {
        const { item } = this.props;
        if( item.length < 0){
            //CreateActions.setModal();
            return;
        }
    }

    onFirstDataAddClick = (e) => {

    }

    onChangehandle = (e) => {
        console.log(e.target);
    }

    onTempClickhandle = () =>{

    }

    onPostClickhandle = () => {

    }

    render(){
        return(
            <CreatePageTemplate
                header={<Header logo='logo' />}
                padding
                responsive
            />
        )
    }
}

export default connect(
    (state) => ({
        title: state.title,
        country : state.country,
        city : state.citym,
        tag : state.tag,
        item: state.item
    }),
    (dispatch) => ({
        CreateActions: bindActionCreators(createAction, dispatch)
    })
)(CreateContainer);