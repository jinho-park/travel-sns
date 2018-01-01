import React from 'react';
import styles from './BoardInfo.scss';
import classNames from 'classnames/bind';
import { Cicon} from 'components';
import { Popup, Header } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const BoardInfo = ({
        title, 
        write, 
        like, 
        comment, 
        children, 
        date
    }) => {
    return(
        <div className={cx('boardinfo')}>
            <div className={cx('region')}>
                <div>dd</div>
                <div className={cx('right-side')}>
                    <Popup
                        trigger={<Cicon link="true" name="close" size="large"/>}
                        content='Delete'
                        size="tiny"
                    />
                </div>
            </div>
            <div className={cx('title')}>
                <Header as='h2'>{title}</Header>
            </div>
            <div className={cx('writter')}>{write}</div>
            <div className={cx('line')}></div>
            <div className={cx('bottom')}>
                <div className={cx('date')}>{date}</div>
                <div className={cx('comment')}>
                    <Cicon name="like" size="small" color="red">
                        {like}
                    </Cicon>
                    <Cicon name="comment outline" size="small">
                        {comment}
                    </Cicon> 
                </div>
            </div>
        </div>
    )
}

export default BoardInfo;