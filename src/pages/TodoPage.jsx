import { useRef, useState } from 'react'
import { ItemNotesLayout } from '../layouts/ItemNotesLayout';
const TodoPage = () => {
    const [notes, setNote] = useState(['Ini catatan']);
    const inputNote = useRef(null);

    const actionSubmit = () => {
        if(inputNote.current.value === '') {
            alert('Note tidak boleh kosong');
            return;
        }
        setNote([...notes, inputNote.current.value])
        inputNote.current.value = '';
    }

    const hapusAction = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNote(newNotes);
    }

    return (<>
        <input ref={inputNote} type="text" />
        <button onClick={actionSubmit}>Tambah</button>
        <ul>
            {notes.map((note, index) => {
                return <ItemNotesLayout key={index} index={index} note={note} hapusAction={hapusAction}/>
            })}
        </ul>
    </>);
}

export default TodoPage;