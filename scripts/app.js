import { root } from './config.js';
import DOMHandler from './dom-handler.js';
import HomePage from './pages/Home/home.js';

function App() {
  DOMHandler.load(HomePage(), root);
}

export default App;
