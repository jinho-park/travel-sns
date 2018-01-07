import React from 'react';
import { CreatePageTemplate, Header } from 'components';

const CreatePage = () => {
    return (
        <CreatePageTemplate
            header={<Header logo="logo" user="ss"/>}
            padding
            responsive
        >
        </CreatePageTemplate>
    )
}

export default CreatePage;