import React , { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Welcome } from 'components';
import * as userActions from 'store/modules/user';

class AuthContainer extends Component{
    
    handleKeyPress=(e)=>{
        if(e.key !== 'enter') return;
        
    }

    onLoginClickhandle = (e) =>{
        const { mode, UserActions } = this.props;
        console.log(mode);
        console.log(UserActions);
        UserActions.setForm();
    }

    onResisterClickhandle = (e) => {

    }

    onPrevClickhandle = (e) =>{

    }

    onLoginhandle = (e) => {

    }

    onChangeInput = (e) => {
        
    }

    render(){
        const {
            handleKeyPress,
            onLoginClickhandle,
            onResisterClickhandle,
            onPrevClickhandle,
            onLoginhandle,
            onChangeInput
        } = this;
        const { mode } = this.props;
        return(
            <Welcome
                onLoginClickhandle={onLoginClickhandle}
                onResisterClickhandle={onResisterClickhandle}
                onPrevClickhandle={onPrevClickhandle}
                onLoginhandle={onLoginhandle}
                onChangeInput={onChangeInput}
                mode={mode}
            />
        )
    }
}

export default connect(
    (state) => ({
        mode: state.user.mode
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(AuthContainer);

