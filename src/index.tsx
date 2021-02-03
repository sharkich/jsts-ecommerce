import './index.css';
import { App } from './App';
import { appStore } from './App/Store/AppStore';

const root = document.getElementById('root');

if (!root) {
  throw new Error('The root element is undefined!');
}

const app = new App();

root.innerHTML = app.render();

appStore.$state.subscribe(() => {
  root.innerHTML = app.render();
  app.addEvents();
});
