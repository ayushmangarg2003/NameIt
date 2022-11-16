import React from 'react'
import './NameCard.css'


const nameCheapUrl = 'https://www.namecheap.com/domains/registrations/result/?domain='
const NameCard = ({suggestedName}) => {
  return (
    <a className='card-link' href= {`${nameCheapUrl}${suggestedName}`} target='_blank'>
        <div className='result-name-card'>
            <p className="result-name">{suggestedName}</p>
        </div>
    </a>
  )
}

export default NameCard
