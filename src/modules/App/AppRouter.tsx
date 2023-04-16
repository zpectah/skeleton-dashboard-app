import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Error404 } from '../Error404';
import { Dashboard } from '../Dashboard';
import { Profile } from '../Profile';
import { SignIn } from '../SignIn';
import { Issues } from '../Issues';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard />} />

      <Route path="issues/*" element={<Issues />} />

      <Route path="profile" element={<Profile />} />
      <Route path="sign-in" element={<SignIn />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
