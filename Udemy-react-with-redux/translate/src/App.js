import React from 'react';
import UserCreate from './components/UserCreate';
import {LanguageStore} from './context/LanguageContext';
import ColorContext from './context/ColorContext';
import LanguageSelector from './components/LanguageSelector';

class App extends React.Component {
 
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
            <ColorContext.Provider value="primary">
              <UserCreate />
            </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}
export default App;