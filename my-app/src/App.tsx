import * as React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import GlobalLayout from 'pages/global/components/global-layout';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GlobalLayout />} />

    </Routes>
  </BrowserRouter>
);

export default App;
