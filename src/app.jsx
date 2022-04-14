import React, { useState, useEffect } from '../vendor/react';
import * as ReactDOM from '../vendor/react-dom';
import { BrowserRouter, Routes, Route } from '../vendor/react-router-dom';
import './main.css';

import Home from './home';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';

import {fetchData} from './data';

export const App = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchData();
	setLoaded(true);
  })

  if(!loaded){
	  return <p>loading!!!</p>
  }

  return (
	  <BrowserRouter>
	    <Routes>
	      <Route path="/" element={<Home />}>
	        <Route path="expenses" element={<Expenses />} />
	        <Route path="invoices" element={<Invoices />}>
	          <Route
	            index
	            element={
	              <main style={{ padding: '1rem' }}>
	                <p>Select an invoice</p>
	              </main>
	            }
	          />
	          <Route path=":invoiceId" element={<Invoice />} />
	        </Route>
	        <Route
	          path="*"
	          element={
	            <main style={{ padding: '1rem' }}>
	              <p>There's nothing here!</p>
	            </main>
	          }
	        />
	      </Route>
	    </Routes>
	  </BrowserRouter>
  );
}
