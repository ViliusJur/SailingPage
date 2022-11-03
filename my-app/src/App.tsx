import * as React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import GlobalLayout from 'pages/global/components/global-layout';
import HomePage from 'pages/global/home-page/home-page';
import BoatsPage from 'pages/global/boats-page/boats-page';
import EnciklopediaPage from 'pages/global/enciklopedia-page/enciklopedia-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/boats" element={<GlobalLayout />}>
        <Route index element={<BoatsPage />} />
        <Route path=":year" element={<BoatsPage />} />
      </Route>

      <Route path="/enciklopedia" element={<GlobalLayout />}>
        <Route index element={<EnciklopediaPage />} />
      </Route>

    </Routes>
  </BrowserRouter>
);

export default App;
