import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const CardComp = (props) => {
    const { image, link, text, projectName } = props;
    return (
        <div className="card">
            <div className="lines"></div>
            <div className="img">
                <img src={image} alt={projectName} />
            </div>
            <div className="content">
                <div className="details">
                    <h2>{projectName} <br /></h2>
                    <div className="data">
                        <p>{text}</p>
                    </div>
                    <div className="actionBtn">
                        <a href={link} target='_blank'><button>Proyecto</button></a>
                        <a href={link} target='_blank'><button>Código</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
