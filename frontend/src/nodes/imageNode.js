// imageNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ImageNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://placekitten.com/80/80');
  return (
    <BaseNode
      id={id}
      data={data}
      label="Image"
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-img` },
      ]}
    >
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} style={{ width: '90%' }} />
      <div style={{ marginTop: 6 }}>
        <img src={url} alt="preview" style={{ width: 48, height: 48, borderRadius: 8, border: '1px solid #a259f7' }} />
      </div>
    </BaseNode>
  );
}
