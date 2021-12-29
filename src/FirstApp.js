//FC
import React from 'react';

const FirstApp = ({greet = 'Hello World'}) => {


    return (
        <>
            <h1>{greet}</h1>
            {/* <pre>{JSON.stringify(num, null, 3)}</pre> */}
            <p>First App</p>
        </>
    );

}

export default FirstApp;