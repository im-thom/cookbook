import React from 'react';
import Button from '../../components/Button'

export default function RecipesList() {
    return (
        <div>
            <Button 
                handleClick={() => console.log("clicked")}
            />
        </div>
    )
}