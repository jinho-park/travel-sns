import React from 'react';
import { PageTemplate, Header } from 'components';

const MainPage = () => {
    return(
        <PageTemplate header={<Header logo="logo" user="ss"/>} 
            padding 
            responsive
            like='1'
            comment='1'
            image='1'
            title="박진규"
            write="진호"
            date="2017/12/29"
        >
        </PageTemplate>
    )
}

export default MainPage;