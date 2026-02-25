// textNode.js


import { useState, useMemo, useRef, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

// Helper to extract unique variables in {{var}} format
function extractVariables(text) {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text))) {
    vars.add(match[1]);
  }
  return Array.from(vars);
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textAreaRef = useRef(null);

  // Extract variables for handles
  const variables = useMemo(() => extractVariables(currText), [currText]);

  // Dynamic sizing logic
  const [dimensions, setDimensions] = useState({ width: 200, height: 80 });
  useEffect(() => {
    // Estimate width/height based on text length and line breaks
    const lines = currText.split('\n');
    const maxLine = Math.max(...lines.map(l => l.length), 10);
    const width = Math.min(400, Math.max(180, maxLine * 10));
    const height = Math.min(300, Math.max(60, lines.length * 28));
    setDimensions({ width, height });
  }, [currText]);

  // Handles: left for each variable, right for output
  const handles = [
    ...variables.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-var-${v}`,
      style: { top: `${(i + 1) * 32}px` },
    })),
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text"
      handles={handles}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <label style={{ width: '100%' }}>
        Text:
        <textarea
          ref={textAreaRef}
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          style={{
            width: '100%',
            minHeight: 40,
            resize: 'none',
            fontFamily: 'monospace',
            fontSize: 14,
            border: '2px solid #a259f7',
            borderRadius: 6,
            background: '#fff',
            color: '#3d0066',
            marginTop: 4,
          }}
        />
      </label>
      {variables.length > 0 && (
        <div style={{ fontSize: 11, color: '#a259f7', marginTop: 2 }}>
          Vars: {variables.join(', ')}
        </div>
      )}
    </BaseNode>
  );
}
