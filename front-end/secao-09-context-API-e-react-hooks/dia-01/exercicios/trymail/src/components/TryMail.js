import React from 'react'
import { READ, UNREAD } from '../data/emails';
import ReadUnRead from './ReadUnRead';

function TryMail({ emails, setStatus }) {
  const allRead = () => {
    const allAsRead = emails.map((email) => {
      return { ...email, status: READ };
    });
    setStatus(allAsRead);
  };

  const allUnRead = () => {
    const allAsUnRead = emails.map((email) => {
      return { ...email, status: UNREAD };
    });
    setStatus(allAsUnRead);
  };

  return (
    <main>
    <header>
      <h1>TryMail</h1>
    </header>
    <ReadUnRead
      allRead={ allRead }
      allUnRead={ allUnRead }
    />
    <ul>
      {emails.map((email) => {
        const statusEmail = email.status === UNREAD ? 'read' : 'unread';
        return (
          <li key={email.id}>
          <p className={ statusEmail }>{ email.title }</p>
          <div>
            <button
              type='button'
              title='Marcar como lido'
              onClick={ () =>  setStatus(email.id, READ) }

            >
              READ
            </button>
            <button
              type='button'
              title='Marcar como não lido'
              onClick={ () =>  setStatus(email.id, UNREAD) }
            >
              UNREAD
            </button>
          </div>
        </li>
        );
      })}
    </ul>
    </main>
  )
}

export default TryMail