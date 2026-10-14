import React, { useContext } from 'react';
import { UserDataContext } from '../contexts/UserDataContext';

function AppHeader() {
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {useContext.username}</h2>
    </div>
  );
}

export default AppHeader;
