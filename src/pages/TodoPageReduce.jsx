import { useContext, useReducer, useRef } from 'react'
import { ItemNotesLayout } from '../layouts/ItemNotesLayout';
import TodoReducer from '../reducer/TodoReducer';
import { TodoContext } from '../context/TodoContext';

const TodoPageReduce = () => {
    const { todos } = useContext(TodoContext);
    const [notes, dispatch] = useReducer(TodoReducer, todos);
    const inputNote = useRef(null);

    const actionSubmit = () => {
        if(inputNote.current.value === '') {
            alert('Note tidak boleh kosong');
            return;
        }
        dispatch({
            type: 'ADD_NOTE',
            payload: inputNote.current.value
        });
        inputNote.current.value = '';
    }

    const hapusAction = (index) => {
        dispatch({
            type: 'DELETE_NOTE',
            payload: index
        });
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

export default TodoPageReduce;