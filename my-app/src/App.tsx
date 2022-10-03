import * as React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import GlobalLayout from 'pages/global/components/global-layout';
import HomePage from 'pages/global/home-page/home-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<HomePage />} />

      </Route>

    </Routes>
  </BrowserRouter>
);

export default App;
