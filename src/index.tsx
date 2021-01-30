import './index.css';
import { App } from './App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('The root element is undefined!');
}

const app = new App();

root.innerHTML = app.render();
