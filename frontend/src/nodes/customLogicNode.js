// customLogicNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const CustomLogicNode = ({ id, data }) => {
  const [logic, setLogic] = useState(data?.logic || 'return input * 2;');
  return (
    <BaseNode
      id={id}
      data={data}
      label="Logic"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-in` },
        { type: 'source', position: Position.Right, id: `${id}-out` },
      ]}
    >
      <label>
        JS Logic:
        <input type="text" value={logic} onChange={e => setLogic(e.target.value)} style={{ width: '90%' }} />
      </label>
    </BaseNode>
  );
}
