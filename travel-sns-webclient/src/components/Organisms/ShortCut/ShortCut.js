import React from 'react';
import styles from './ShortCut.scss';
import classNames from 'classnames/bind';
import { BoardInfo } from 'components';

const cx = classNames.bind(styles);

const ShortCut = ({
        image, 
        like, 
        comment, 
        title, 
        date, 
        write
    }) => {
    return(
        <div className={cx('cut')}>
            <div className={cx('image')}>
                {image}
            </div>
            <div className={cx('info')}>
                <BoardInfo 
                    title={title} 
                    like={like} 
                    comment={comment} 
                    write={write}
                    date={date}
                >

                </BoardInfo>
            </div>
        </div>
    )
}

export default ShortCut;