import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
           <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>   
  );
};
