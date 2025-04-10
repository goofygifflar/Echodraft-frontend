import { useState } from 'react';

export default function TextEditor() {
  const [text, setText] = useState('');
  const [persona, setPersona] = useState('Bestseller-Autor');
  const [feedback, setFeedback] = useState('');

  const getFeedback = async () => {
    const res = await fetch('http://localhost:5000/api/gpt/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, persona }),
    });
    const data = await res.json();
    setFeedback(data.feedback);
  };

  return (
    <div>
      <textarea
        className="w-full h-48 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Dein Text hier..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="my-4">
        <label className="block mb-1 font-semibold">Feedback-Persona:</label>
        <select
          className="border border-gray-300 p-2 rounded-md"
          value={persona}
          onChange={(e) => setPersona(e.target.value)}
        >
          <option>Bestseller-Autor</option>
          <option>Marketing-Coach</option>
          <option>Allgemeiner Leser</option>
          <option>Dein zukünftiges Ich</option>
        </select>
      </div>
      <button onClick={getFeedback} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Feedback generieren
      </button>

      {feedback && (
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-900 whitespace-pre-line rounded-md">
          <h2 className="font-bold mb-2">Feedback:</h2>
          {feedback}
        </div>
      )}
    </div>
  );
}