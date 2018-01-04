import React from 'react';
import styles from './ShortCut.scss';
import classNames from 'classnames/bind';
import { BoardInfo } from 'components';

const cx = classNames.bind(styles);

const ShortCut = ({data, image}) => {
    const { title, like, comment, user, date, place } = data;
    const { country, city } = place;
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
                    write={user}
                    date={date}
                    country={country}
                    city={city}
                />
            </div>
        </div>
    )
}

export default ShortCut;