import React from 'react';

interface WordSearchProps {
  word: string;
  onWordChange: (value: string) => void;
  onSearch: () => void;
  result: string;
}

const WordSearch: React.FC<WordSearchProps> = ({ word, onWordChange, onSearch, result }) => {
  return (
    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
      <label htmlFor="word" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Palabra a buscar:</label>
      <input
        id="word"
        type="text"
        value={word}
        onChange={e => onWordChange(e.target.value)}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: '1.5px solid #b3b3b3',
          fontSize: '1rem',
          background: 'rgba(255,255,255,0.95)',
          minWidth: '120px'
        }}
        placeholder="Palabra..."
      />
      <button
        onClick={onSearch}
        style={{
          padding: '0.5rem 1.2rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(90deg, #646cff 60%, #61dafb 100%)',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          transition: 'background 0.2s'
        }}
      >Buscar</button>
      <div style={{ marginTop: '0.5rem', fontWeight: 'bold', width: '100%', color: '#333', fontSize: '1.05rem' }}>{result}</div>
    </div>
  );
};

export default WordSearch;
