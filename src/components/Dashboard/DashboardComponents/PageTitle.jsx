import React from 'react'

const PageTitle = ({title}) => {
  return (
    <div className='mb-5 sticky top-0'>
        <h3 className=' text-3xl font-bold'>{title}</h3>
    </div>
  )
}

export default PageTitle