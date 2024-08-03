import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      alert('할 일을 입력해 주세요.');
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요."
        value={text}
        onChange={handleChange}
      />
      <button>
        <MdAdd />
      </button>
    </form>
  );
}
