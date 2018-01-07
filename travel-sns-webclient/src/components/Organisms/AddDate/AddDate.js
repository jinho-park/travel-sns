import React from 'react';
import ImageUploader from 'react-images-upload';
import classNames from 'classnames/bind';
import styles from './AddDate.scss';
import { Icon, Label, Input } from 'semantic-ui-react';

const cx = classNames.bind(styles);

const AddDate = ({onDrop, date, onClickDelete, add }) => {
    return(
        <div className={cx('adddate')}>
            <div className={cx('date')}>
                {add ? 
                    <Input type="date" placeholder="choose day"/> : 
                    <Label>{111}</Label>
                }
                <div className={cx('close')}>
                    <Icon 
                        name="close"
                        size="large"
                        link
                        onclick={onClickDelete}
                    />
                </div>
            </div>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        </div>
    )
}

export default AddDate;