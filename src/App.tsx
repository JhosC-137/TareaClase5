
import { useState } from 'react';
import ParagraphInput from './ParagraphInput';
import WordSearch from './WordSearch';
import './App.css';

function binarySearch(arr: string[], target: string): boolean {
  let left = 0;
  let right = arr.length - 1;
  target = target.toLowerCase();
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = arr[mid].toLowerCase();
    if (midVal === target) return true;
    if (midVal < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}

function App() {
  const [paragraph, setParagraph] = useState('');
  const [word, setWord] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    
    const words = paragraph
      .replace(/[.,;:!?¿¡()\[\]{}"']/g, '')
      .split(/\s+/)
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    if (!word.trim()) {
      setResult('Por favor ingresa una palabra.');
      return;
    }
    const found = binarySearch(words, word);
    setResult(found ? `La palabra "${word}" SÍ está en el párrafo.` : `La palabra "${word}" NO está en el párrafo.`);
  };

  return (
    <div style={{ 
      maxWidth: 600, 
      margin: '2rem auto', 
      padding: '1rem', 
      border: '1px solid #ccc', 
      borderRadius: 8,
      background: 'rgba(255,255,255,0.85)',
      boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
    }}>
      <h2>Buscador de Palabras Ojito</h2>
      <ParagraphInput value={paragraph} onChange={setParagraph} />
      <WordSearch word={word} onWordChange={setWord} onSearch={handleSearch} result={result} />
    </div>
  );
}

export default App;
