//FC
import React from 'react';
import PropTypes from 'prop-types';
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min';

const FirstApp = ({greet, subtitle}) => {

    

    return (
        <>
            <h1>{greet}</h1>
            {/* <pre>{JSON.stringify(num, null, 3)}</pre> */}
            <p>{subtitle}</p>
        </>
    );

}

FirstApp.protoType = {
    greet: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'Im a Subtitle'
}

export default FirstApp;
