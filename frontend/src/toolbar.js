// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{
                marginTop: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                background: 'linear-gradient(90deg, #1d648eff 60%, #6186beff 100%)',
                borderRadius: '14px',
                boxShadow: '0 2px 16px #36b27c44, 0 0 8px #fff8',
                padding: '10px 18px',
                maxWidth: '98vw',
                justifyContent: 'center',
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='date' label='Date' />
                <DraggableNode type='switch' label='Switch' />
                <DraggableNode type='image' label='Image' />
                <DraggableNode type='logic' label='Logic' />
            </div>
        </div>
    );
};
