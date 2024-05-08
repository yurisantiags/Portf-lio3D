import React, { useState } from 'react';

const SwitchButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 duration-300 ${isActive ? 'bg-black' : 'bg-gray-300'}`}
      onClick={toggleSwitch}
    >
      <div
        className={`bg-gray-400 w-6 h-6 rounded-full shadow-md transform ${isActive ? 'translate-x-6' : ''}`}
      />
    </div>
  );
};

export default SwitchButton;
