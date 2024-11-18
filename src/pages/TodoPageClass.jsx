import { Component, createRef } from 'react';
import { ItemNotesLayout } from '../layouts/ItemNotesLayout';

class TodoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: ['Ini catatan']
        };
        this.inputNote = createRef();
        
        // Binding methods to this
        this.actionSubmit = this.actionSubmit.bind(this);
        this.hapusAction = this.hapusAction.bind(this);
    }

    actionSubmit() {
        if(this.inputNote.current.value === '') {
            alert('Note tidak boleh kosong');
            return;
        }
        this.setState(prevState => ({
            notes: [...prevState.notes, this.inputNote.current.value]
        }));
        this.inputNote.current.value = '';
    }

    hapusAction(index) {
        const newNotes = [...this.state.notes];
        newNotes.splice(index, 1);
        this.setState({ notes: newNotes });
    }

    render() {
        return (
            <>
                <input ref={this.inputNote} type="text" />
                <button onClick={this.actionSubmit}>Tambah</button>
                <ul>
                    {this.state.notes.map((note, index) => {
                        return <ItemNotesLayout 
                            key={index} 
                            index={index} 
                            note={note} 
                            hapusAction={this.hapusAction}
                        />
                    })}
                </ul>
            </>
        );
    }
}

export default TodoPage;
