import React from 'react';
import { render } from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';

export default function renderComponent(Component, domNode) {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    domNode
  );
}
