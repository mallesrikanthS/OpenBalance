import './App.css';

import OpenBalance from './components/OpenBalance';

// This are rquired for fluentui-icons to use.
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

function App() {
  return (
    <div className="App">
      <div>
        
      <OpenBalance />
        
      </div>
      
    </div>
  );
}

export default App;
