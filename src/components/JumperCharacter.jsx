import React from 'react'

function JumperCharacter({character, className=''}) {
  return (
    <spam className={`jump ${className}`}>{character}</spam>
  )
}

export default JumperCharacter