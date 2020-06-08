import React from 'react'
import { AddBookHandler } from './AddBook'

export default function UpdateBook() {
    const [updateIconClose, setupdateIconClose] = React.useState(false);

    function handleChange(newValue) {
      setupdateIconClose(newValue);
    }
    return (
        <AddBookHandler onChange={handleChange} />
    )
}