import { useState } from 'react';

function Bubling() {
    const [logs, setLogs] = useState([]);

    const logEvent = (message) => {
        setLogs(prevLogs => [...prevLogs, message]);
    };

    return (
        <div>
            <div 
                onClick={(e) => {logEvent('Outer div - Bubble'); e.stopPropagation()}}
                onClickCapture={() => logEvent('Outer div - Capture')}
                style={{ padding: '20px', border: '2px solid black' }}
            >
                <div 
                    onClick={(e) => {logEvent('Inner div - Bubble'); e.stopPropagation()}}
                    onClickCapture={() => logEvent('Inner div - Capture')}
                    style={{ padding: '20px', border: '2px solid blue' }}
                >
                    <button 
                        onClick={(e) => {
                            logEvent('Button clicked - Bubble');
                            e.stopPropagation(); // Uncomment to stop propagation
                        }}
                        onClickCapture={() => logEvent('Button - Capture')}
                    >
                        Click Me
                    </button>
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3>Event Log:</h3>
                <button onClick={() => setLogs([])}>Clear Log</button>
                <ul>
                    {logs.map((log, index) => (
                        <li key={index}>{log}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Bubling;
