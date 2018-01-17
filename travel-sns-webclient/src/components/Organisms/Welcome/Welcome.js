import React from 'react';
import styles from './Welcome.scss';
import classNames from 'classnames/bind';
import { Segment, Grid, Form } from 'semantic-ui-react';
import { Login, Choice, Join } from 'components';

const cx = classNames.bind(styles);

const Welcome = ({ 
        onLoginClickhandle,
        onResisterClickhandle,
        onPrevClickhandle,
        onLoginhandle,
        onChangeInput,
        mode,
        onRegisterhandle,
        form,
        error,
        onKeyPress
    }) => {

    return(
        <div className={cx('welcome')}>
            <Grid 
                textAlign='center'
                className={cx('grid')}
                verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 400 }}>
                    <Form size='large'>
                        <Segment raised>        
                        <Choice 
                            onLoginClickhandle={onLoginClickhandle}
                            onResisterClickhandle={onResisterClickhandle}
                            mode={mode}
                        />
                        <Login
                            onPrevClickhandle={onPrevClickhandle}
                            onLoginhandle={onLoginhandle}
                            onChangeInput={onChangeInput}
                            forms={form}
                            mode={mode}
                            onKeyPress={onKeyPress}
                        />
                        <Join
                            mode={mode}
                            onPrevClickhandle={onPrevClickhandle}
                            onChangeInput={onChangeInput}
                            onRegisterhandle={onRegisterhandle}
                            forms={form}
                            error={error}
                            onKeyPress={onKeyPress}
                        />
                    </Segment>
                    </Form>
               </Grid.Column>
            </Grid>
        </div>




    )
}



 


      


export default Welcome;