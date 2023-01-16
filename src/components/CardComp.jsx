import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const CardComp = (props) => {
    const {image,link, text, projectName} = props;
    return (
        <Card>
            <Card.Img className='cardImg' src={image} />
            <Card.Body>
                <Card.Title><h3><a as={Link} href={link} target="_blank" rel='noopener noreferrer'>{projectName}</a></h3></Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}
