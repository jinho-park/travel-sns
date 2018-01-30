import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import classNames from 'classnames/bind';
import styles from './AddDate.scss';
import { Icon, Label, Input } from 'semantic-ui-react';
import 'react-dropzone-component/styles/filepicker.css';
import 'dropzone/dist/min/dropzone.min.css';

const cx = classNames.bind(styles);

const AddDate = ({
    onDrop, 
    date, 
    onClickDelete, 
    add, 
    onDrophandle }) => {
    const componentConfig = {
        iconFiletypes : ['.jpg', '.png', '.gif'],
        showFiletypeIcon : true,
        postUrl : 'no-url'
    };
    const djsConfig = { 
        autoProcessQueue: false,
        addRemoveLinks : true
    };
    const eventHandlers = { 
        addedfile: (file) => console.log(file),
        removedfile: (file) => console.log(file)
    };

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
                        onClick={onClickDelete}
                    />
                </div>
            </div>
            <DropzoneComponent
                config={componentConfig}
                eventHandlers={eventHandlers}
                djsConfig={djsConfig}
            />
        </div>
    )
}

export default AddDate;