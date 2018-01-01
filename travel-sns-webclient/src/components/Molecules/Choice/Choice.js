import React from 'react';
//import createReactClass from 'create-react-class';
import styles from './Choice.scss';
import classNames from 'classnames/bind';
import { Button } from 'semantic-ui-react';
//import { Login } from 'components';

const cx = classNames.bind(styles);

const Choice = () => {


    

        return(
        
            <div className={cx('Choice')}>
                <Button onClick={ this.styles.hidden = 'true' }color = 'orange'  fluid size = 'large'  style={{ color: 'white', marginBottom: '1em' }} >로그인</Button> 
                <Button color = 'grey'  fluid size = 'large' style={{ color: 'white', marginBottom: '1em' }} >회원가입</Button>
            </div>

        )
}



 


      


export default Choice;