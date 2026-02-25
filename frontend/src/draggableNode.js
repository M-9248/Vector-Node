// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{
          cursor: 'grab',
          minWidth: '80px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #fff 60%, #3d75b1ff 100%)',
          border: '2px solid #080808ff',
          boxShadow: '0 2px 12px #1b27acaa, 0 0 6px #fff8',
          justifyContent: 'center',
          flexDirection: 'column',
          fontWeight: 'bold',
          fontFamily: 'monospace',
          color: '#6d28d9',
          fontSize: '1rem',
          transition: 'all 0.2s',
        }}
        draggable
      >
          <span style={{ color: '#000000ff', textShadow: '0 2px 8px #a259f7aa' }}>{label}</span>
      </div>
    );
  };
  