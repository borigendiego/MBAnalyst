import React from 'react';
import Iframe from 'react-iframe';

const MyIframe = (props) => {
    const { url, id } = props;
    return (
        <Iframe url={url}
                width="99%"
                height="100%"
                id={id}
                className="my-iframe"
                display="initial"
                position="relative"
        />
    )
};

export default MyIframe