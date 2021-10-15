import React from 'react';
import FormInput from './components/FormInput';
import List from './components/List';
import Footer from './components/Footer';
import {DataProvider} from './components/DataProvider'

function App() {
  return (
  <div className="App">

    <DataProvider>
       
        <h2>My list</h2>
        <FormInput/>
        <List/>
        <Footer/>
    
      
    </DataProvider>
     </div>
    
  );
}

export default App;
