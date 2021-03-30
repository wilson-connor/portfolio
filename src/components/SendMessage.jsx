import React, { useState, useEffect } from 'react';
import axios from 'axios';
const SendMessage = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isServerError, setIsServerError] = useState(false);
  const [inputError, setInputError] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    let fixedName = '';

    for (let i = 0; i < name.length; i++) {
      if (name[i] === ' ') continue;
      fixedName += name[i];
    }
    const form = {
      from: `${fixedName}@freemail.com`,
      to: 'wilso.conn@gmail.com',
      subject,
      text: message,
    };

    try {
      await validateForm(form);
      await axios.post('/email', form);
      clearFields();
    } catch (err) {
      handleError(err);
    }
  };

  const clearFields = () => {
    setName('');
    setSubject('');
    setMessage('');
  };

  const handleError = (err) => {
    if (err.isAxiosError) {
      setIsServerError(true);
    }
    if (err.message === 'Please enter your name') {
      setInputError(err.message);
    }
    if (err.message === 'Please enter a subject') {
      setInputError(err.message);
    }
    if (err.message === 'Please enter a message') {
      setInputError(err.message);
    }
  };

  const validateForm = async (form) => {
    const { from, subject, text } = form;
    if (!from) throw new Error('Please enter your name');
    if (!subject) throw new Error('Please enter a subject');
    if (!text) throw new Error('Please enter a message');
    setInputError('');
  };

  return (
    <div>
      <h1 className="content-header">Send me a message!</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit" onClick={submit}>
        Send
      </button>
      {isServerError ? <div>Sorry! A server error occurred</div> : null}
      {inputError ? <div>{inputError}</div> : null}
    </div>
  );
};

export default SendMessage;
