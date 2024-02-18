import React from 'react';

export interface supportPage  {
    title: string;
    link: string;
    imageUrl: string;
}

export function SupportElement ({ title, link, imageUrl}: supportPage) {
  return (
    <div className="flex items-center justify-between space-x-4 p-4 border rounded-md shadow-md">
    <div>

      <h2 className="text-xl font-bold">{title}</h2>

      <p className="mt-2">{link}</p>
    </div>

      <img src={imageUrl} alt="Support Image" className="w-32 h-32 object-cover rounded-md" />
    </div>
  );
}

export default SupportElement;
