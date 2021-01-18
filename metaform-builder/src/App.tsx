import React from 'react';
import ReactDOM from 'react-dom';
import HeaderNav from './components/generic/HeaderNav';

//Material-UI components
import Button from '@material-ui/core/Button';

//Styles
import './App.css';

function App() {

  return (
    <div>
      <HeaderNav />

      <Button variant="contained" color="primary">
        Tulosta JSON
      </Button>
    </div>
  );
}

export default App;
