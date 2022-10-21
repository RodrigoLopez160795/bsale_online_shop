import { root } from './config.js';
import DOMHandler from './dom-handler.js';
import HomePage from './pages/Home/home.js';
import { getCategories } from './services/categories.js';

function App() {
  DOMHandler.load(HomePage(), root);
}

getCategories().then(console.log);

export default App;
