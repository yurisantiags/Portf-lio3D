'use client';
import React, { useState } from 'react';

export default function EmailForm() {
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('URL_DO_SEU_ENDPOINT_ZAPIER', {
          email: email
        });
        alert('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email. Please try again later.');
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
              Send me an email:
            </label>
            <input
              className="w-full px-4 py-2 mb-4 leading-tight opacity-85 focus:opacity-100 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Subject"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress} // Chama handleKeyPress quando a tecla Enter for pressionada
              required
            />
          </form>
        </div>
      </div>
    );
  }