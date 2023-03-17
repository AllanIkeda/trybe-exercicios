import React, { useEffect, useState } from "react";
import TryMail from "./components/TryMail";
import emailList, { READ } from "./data/emails";

function App() {
  const [emails, setEmails] = useState(emailList);

  const setStatus = (id, status) => {
    const newEmails = emails.map((email) => {
      if (email.id === id) {
        return { ...email, status };
      }
      return email;
    });
    setEmails(newEmails);
  };

  useEffect(() => {
    const readEmails = emails.filter((email) => email.status === READ);

    if(readEmails) {
      alert(`Você tem ${readEmails.length} emails lidos`);
    }
  }, [emails]);
  return (
    <TryMail emails={ emails } setStatus={ setStatus } />
  );
}

export default App;
