// switchNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const SwitchNode = ({ id, data }) => {
  const [on, setOn] = useState(data?.on || false);
  return (
    <BaseNode
      id={id}
      data={data}
      label="Switch"
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-out` },
      ]}
    >
      <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input type="checkbox" checked={on} onChange={e => setOn(e.target.checked)} />
        {on ? 'ON' : 'OFF'}
      </label>
    </BaseNode>
  );
}
