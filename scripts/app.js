import Navbar from './components/navbar.js';
import { root } from './config.js';
import DOMHandler from './dom-handler.js';

function App() {
  DOMHandler.load(Navbar(), root);
}

export default App;
