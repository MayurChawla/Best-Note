import React from 'react';
import './App.css';
import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';

import firebase from 'firebase';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes:null
    };
  }
  
  render() {
    return(
      <div className="app-container">

        <SidebarComponent 
            selectedNoteIndex={this.state.selectedNoteIndex}
            notes={this.state.notes}></SidebarComponent>
        <EditorComponent></EditorComponent>

      </div>
    )
  }

  componentDidMount = () => {
    firebase.firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notesarray = serverUpdate.docs.map(doc => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
        console.log(notesarray);
        this.setState({notes: notesarray});
      });
  }


}

export default App;
