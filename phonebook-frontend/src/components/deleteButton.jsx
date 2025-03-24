import React from 'react'

const DeleteButton = ({onClick}) => {
    return (
        <>
            <button type="button" onClick={onClick}>delete</button>
        </>
    )
}

export default DeleteButton