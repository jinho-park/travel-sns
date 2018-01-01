import React from 'react';
//import createReactClass from 'create-react-class';
import styles from './Choice.scss';
import classNames from 'classnames/bind';
import { Button } from 'semantic-ui-react';
import { WelcomeButton } from 'components';

const cx = classNames.bind(styles);



const Choice = ({ds_off}) => {

        return(

            <div className={ cx('Choice' , {ds_off}) } >
                
                <Button 
                    fluid size = 'large'
                    style={{ color: 'white', marginBottom: '1em' }}
                    color='orange'>
                    로그인
                </Button> 
                <WelcomeButton color = 'grey' label="회원가입" />
            </div>

        )
}  


export default Choice;


