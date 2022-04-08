import './App.css';
import React from 'react';
import NumberList from './views/numberListView/numberListView';
import WordList from './views/wordList/wordListView';
import { Button } from '@mui/material';

function App() {
  const [isNumberView, setIsNumberView] = React.useState(true);
  return (
    <div className="App">
      {isNumberView ? <NumberList /> : <WordList /> }
      <div style={{marginTop:"80px"}}>
        <Button variant="outlined" 
        onClick={()=>setIsNumberView(!isNumberView)}>
          {isNumberView? "Change to word list" : "Change to number list"}
        </Button>
      </div>
    </div>
  );
}

export default App;
