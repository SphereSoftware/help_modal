import App from './app/app';
import renderComponent from 'utils/renderComponent';

const DOME_NODE = document.getElementById('Sphere_Software_help_modal');

renderComponent(App, DOME_NODE);

if (module.hot) {
  module.hot.accept('./app/app', () => {
    const component = require('./app/app').default;
    renderComponent(component, DOME_NODE);
  });
}
