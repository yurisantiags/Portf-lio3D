'use client';   
import React, { useState } from 'react';

const EmailBox = () => {
  const [copied, setCopied] = useState(false);
  const email = "yurisantiagx2@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Reset copied state after 1.5 seconds
  };

  return (
    <div
      className={`p-4 cursor-pointer w-72 text-center bg-opacity-20 rounded-lg hover:scale-110 duration-500  ${copied ? 'bg-green-200  ' : 'bg-white '}`}
      onClick={copyToClipboard}
    >
      <p className="text-lg">{email}</p>
      {copied && <p className="text-sm text-green-600">Copied!</p>}
    </div>
  );
};

export default EmailBox;