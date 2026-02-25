// dateNode.js
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DateNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      label="Date"
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-date` },
      ]}
    >
      <span style={{ fontFamily: 'monospace' }}>Current Date Output</span>
    </BaseNode>
  );
}
