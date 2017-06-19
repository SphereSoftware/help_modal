import App from './app/app';
import renderComponent from 'utils/renderComponent';

const DOME_NODE = document.getElementById('Sphere_Software_help_modal');

(function addFont() {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Open+Sans:300,400';
  link.rel = 'stylesheet';

  document.getElementsByTagName('head')[0].appendChild(link);
})();

renderComponent(App, DOME_NODE);

if (module.hot) {
  module.hot.accept('./app/app', () => {
    const component = require('./app/app').default;
    renderComponent(component, DOME_NODE);
  });
}
