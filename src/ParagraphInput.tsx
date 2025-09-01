import React from 'react';

interface ParagraphInputProps {
  value: string;
  onChange: (value: string) => void;
}

const ParagraphInput: React.FC<ParagraphInputProps> = ({ value, onChange }) => {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label htmlFor="paragraph" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Párrafo:</label>
      <textarea
        id="paragraph"
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={5}
        style={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '8px',
          border: '1.5px solid #b3b3b3',
          fontSize: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          resize: 'vertical',
          background: 'rgba(255,255,255,0.95)'
        }}
        placeholder="Escribe tu párrafo aquí..."
      />
    </div>
  );
};

export default ParagraphInput;
