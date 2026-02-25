// submit.js


import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });
            const data = await response.json();
            alert(`Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag ? 'Yes' : 'No'}`);
        } catch (err) {
            alert('Failed to submit pipeline.');
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            padding: '16px 0 32px 0',
        }}>
            <button
                type="button"
                onClick={handleSubmit}
                style={{
                    background: '#fff',
                    color: '#a259f7',
                    border: '3px solid #a259f7',
                    borderRadius: 10,
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    padding: '10px 36px',
                    boxShadow: '0 2px 12px #a259f7aa',
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                }}
                onMouseOver={e => {
                    e.target.style.background = '#a259f7';
                    e.target.style.color = '#fff';
                }}
                onMouseOut={e => {
                    e.target.style.background = '#fff';
                    e.target.style.color = '#a259f7';
                }}
            >
                Submit
            </button>
        </div>
    );
}
