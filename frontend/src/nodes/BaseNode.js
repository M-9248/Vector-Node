// BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';

/**
 * BaseNode abstraction for all node types.
 * @param {object} props
 * @param {string} props.id - Node id
 * @param {object} props.data - Node data
 * @param {string} props.label - Node label/title
 * @param {React.ReactNode} props.children - Custom content for the node
 * @param {Array} props.handles - Array of handle configs: { type, position, id, style, isConnectable }
 * @param {object} props.style - Custom style for the node container
 */
export const BaseNode = ({ id, data, label, children, handles = [], style = {} }) => {
  // Default black/white node style
  const nodeStyle = {
    minWidth: 160,
    minHeight: 60,
    maxWidth: '98vw',
    maxHeight: 340,
    border: '3px solid #222',
    borderRadius: 16,
    background: '#fff',
    boxShadow: '0 2px 12px 0 #2222',
    padding: 14,
    color: '#111',
    fontFamily: 'monospace',
    letterSpacing: 1,
    transition: 'all 0.2s',
    ...style,
  };
  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#111',
    fontSize: 17,
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
    background: 'none',
    borderRadius: 8,
    padding: '2px 0',
    boxShadow: 'none',
  };
  return (
    <div style={nodeStyle}>
      <div style={labelStyle}>{label}</div>
      <div style={{ marginBottom: 6 }}>{children}</div>
      {/* Render handles */}
      {handles.map((h, idx) => (
        <Handle
          key={h.id || idx}
          type={h.type}
          position={h.position}
          id={h.id}
          style={{
            background: h.type === 'source' ? '#111' : '#fff',
            border: '2px solid #111',
            width: 16,
            height: 16,
            borderRadius: 8,
            boxShadow: h.type === 'source' ? '0 0 8px #1118' : '0 0 4px #1112',
            ...h.style,
          }}
          isConnectable={h.isConnectable}
        />
      ))}
    </div>
  );
};
