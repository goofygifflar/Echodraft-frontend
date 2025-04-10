import { useState } from 'react';
import TextEditor from '../components/TextEditor';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">EchoDraft</h1>
        <TextEditor />
      </div>
    </div>
  );
}