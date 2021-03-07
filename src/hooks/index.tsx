import React from 'react';

import { ModalProvider } from './Modal';

const AppProvider: React.FC = ({ children }) => (
  <ModalProvider>{children}</ModalProvider>
);

export default AppProvider;
