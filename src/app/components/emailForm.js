'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/send-email', {
        email: email,
      });
      alert('E-mail enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-white md:text-sm text-xs opacity-75 transition-all" htmlFor="email">
            Enviar-me um e-mail:
          </label>
          <input
            className="w-full px-4 py-2 mb-4 leading-tight opacity-85 focus:opacity-100 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Endereço de e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            required
          />
        </form>
      </div>
    </div>
  );
}
