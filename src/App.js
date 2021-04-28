import React from 'react';
import './App.css';
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
      <div>Hello</div>
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
