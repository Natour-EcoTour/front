'use client';
import { useState } from 'react';

export default function MySwitch() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn((prev) => !prev);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isOn}
        onChange={toggleSwitch}
        className="sr-only peer"
      />

      <div
        className={`
          w-11 h-6 bg-red-100 rounded-full
          peer-focus:ring-2 peer-focus:ring-green-300
          peer-checked:bg-green-600
          transition-colors duration-200
        `}
      />

      <span
        className={`
          absolute top-1 left-1
          bg-white w-4 h-4 rounded-full shadow
          peer-checked:translate-x-5
          transition-transform duration-200
        `}
      />
    </label>
  );
}
