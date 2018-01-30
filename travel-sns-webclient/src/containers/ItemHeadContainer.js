import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as createActions from 'store/modules/create';
import { createAction } from 'redux-actions';
import { ItemHead } from 'components';
import country_city from 'country-city';

class ItemHeadContainer extends Component{
    onChangehandle = (e) => {
        const { name, value } = e.target;
        const { CreateActions } = this.props;

        console.log(value);

        CreateActions.changeData({name, value});
    }

    onAddTagClickhandle = (e) => {
        const { CreateActions } = this.props;
        const { value } = e.target;

        CreateActions.addTag({value});
    }

    onAddDateClickhandle = (e) => {
        const { CreateActions } = this.props;

        CreateActions.addDate();
    }

    onTempClick = () => {
        const { CreateActions } = this.props;

        CreateActions.tempSaveData();
    }

    onPostClick = () => {
        const { CreateActions } = this.props;

        CreateActions.postData();
    }

    onSelectModalhandle = () => {
        const { CreateActions } =this.props;

        CreateActions.setModal();
    }

    render(){
        const { 
            onChangehandle, 
            onAddTagClickhandle,
            onAddDateClickhandle,
            onTempClick,
            onSelectModalhandle
        } = this;
        const { title, country } = this.props;

        const countries = country_city.getCountries();
        const options = [];

        countries.forEach(function(item, index){
            const data = {
                key : item,
                value : item,
                text : item
            };
            options[index] = data;
        });

        console.log(country);

        return(
            <ItemHead
                onChangehandle={onChangehandle}
                onTagClickhandle={onAddTagClickhandle}
                onDateClickhandle={onAddDateClickhandle}
                onTempClickhandle={onTempClick}
                onSelectModalhandle={onSelectModalhandle}
                title={title}
                country={country}
                options={options}
            />
        )
    }
}

export default connect(
    (state) => ({
        title : state.create.get('title'),
        country : state.create.get('country'),
        city : state.create.get('city')
    }),
    (dispatch) => ({
        CreateActions : bindActionCreators(createActions, dispatch)
    })
)(ItemHeadContainer);