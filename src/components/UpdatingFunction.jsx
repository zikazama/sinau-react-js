import { useState, useEffect, memo } from "react";
import { PropTypes } from 'prop-types';

export const UpdatingClass = memo(function UpdatingClass() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // Equivalent to componentDidUpdate
    useEffect(() => {
        alert('componentDidUpdate');
    }, [count2]); // Will run whenever count or count2 changes

    return (
        <>
            <h2>Updating Class</h2>
            <h3>Nilai Count : {count}</h3>
            <h3>Nilai Count 2 : {count2}</h3>
            <button 
                style={{margin: '5px'}} 
                onClick={() => setCount(count + 1)}
            >
                Update Count
            </button>
            <button 
                style={{margin: '5px'}} 
                onClick={() => setCount2(count2 + 1)}
            >
                Update Count 2
            </button>
        </>
    );
});

UpdatingClass.propTypes = {
    count: PropTypes.number.isRequired
};
