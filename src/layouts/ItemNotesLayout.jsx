import { PropTypes } from 'prop-types';
import { useState } from 'react';

export const ItemNotesLayout = ({ index, note, hapusAction }) => {
    const [isDone, setDone] = useState(false);

    const doneAction = () => {
        setDone(true);
    }

    return (<>
        <li key={index} style={isDone ? {textDecoration: 'line-through'} : {}}>{note}
        <button onClick={() => doneAction()} style={{margin: '5px'}}>Done</button>
        <button onClick={() => hapusAction(index)}>Hapus</button></li ></>)
}

ItemNotesLayout.propTypes = {
    index: PropTypes.number.isRequired,
    note: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
    ]).isRequired,
    hapusAction: PropTypes.func.isRequired
};