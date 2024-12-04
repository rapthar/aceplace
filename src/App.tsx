import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CategoryNav from './components/navigation/CategoryNav';
import FilterBar from './components/filters/FilterBar';
import PropertyGrid from './components/property/PropertyGrid';
import PropertyDetails from './components/property/PropertyDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddListing from './pages/AddListing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <CategoryNav />
            <div className="max-w-7xl mx-auto px-4 py-6">
              <FilterBar />
              <PropertyGrid />
            </div>
          </Layout>
        } />
        <Route path="/property/:id" element={
          <Layout showHeader={false}>
            <PropertyDetails />
          </Layout>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-listing" element={<AddListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;