// @flow

import * as React from 'react';

type Props = {
    text?: Text,
    handleClick: () => any
}

export default function Button(
    {handleClick}: Props) {
    
    return (
        <button 
            onClick={handleClick}
        />
        )
}