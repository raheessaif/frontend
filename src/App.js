// App.js

import React from 'react';
import TaskList from './components/TaskList';
import LivePage from './components/LivePage';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import Login from './components/Login';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <div>
      <BrowserRouter forceRefresh={true}>
      <Routes>
        <Route path="/livepage" element={<LivePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
