import React, { useState } from 'react';

const Option = (props) => {
    return (
        <option value={props.element}>{props.element}</option>
    )
}

export default Option;