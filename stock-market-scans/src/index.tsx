import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import StockScanDetail from './pages/StockScanDetail/StockScanDetail';
import StockScanList from './pages/StockScanList/stockScanList';
import VariableParams from './pages/VariableParams/VariableParams';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <div className='wrapper'>
    <Routes>
      <Route path="/" element={<StockScanList />} />
      <Route path="/details/:id" element={<StockScanDetail/>} />
      <Route path="variable/:var/:ind/:id" element={<VariableParams/>}/>
    </Routes>
    </div>
  </BrowserRouter>
);