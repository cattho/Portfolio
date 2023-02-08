import React from 'react'

const SkillsCards = (props) => {
    const { urlCertificado, certificado, fecha, entidad } = props;
    return (
        <div className='cardCerti'>
            <a href={urlCertificado} target='_blank' rel='noopener noreferrer'><h3 className='textSkillsDetail'>{entidad}</h3></a>
            <p className='textCard'>{certificado}</p>
            <p className='textCard'>{fecha}</p>
        </div>
    )
}

export default SkillsCards