import React from 'react'

function ReadUnRead({ allRead, allUnRead }) {
  return (
    <div>
      <button
        type='button'
        title='Marcar todos como lidos'
        onClick={ allRead }
      >
        Mark All Read
      </button>
      <button
        type='button'
        title='Marcar todos como não lidos'
        onClick={ allUnRead }
      >
        Mark All Unread
      </button>

    </div>
  )
}

export default ReadUnRead