import React from 'react'

export const Container = (props) => {
  return (
    <div className='w-full shadow-lg'>
        {
            props.children
        }
    </div>
  )
}
