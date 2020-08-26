import React from 'react'
import { Button } from "react-bootstrap"

const Btn = (props) => {
    return (
        <Button variant={props.variant}>{props.text}</Button>
    )
}

export default Btn
