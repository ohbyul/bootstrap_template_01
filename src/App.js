import React from "react";
import { HashRouter, Route, Link, Redirect, Switch, BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/css/index.css';
import '../src/assets/css/common.css';

import { DarkThemeToggle, Flowbite } from 'flowbite-react';
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))      // Main Containers


function App() {
  const initialMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <>
      <BrowserRouter >
        <React.Suspense>
          <Switch>
            {
              <Route path="/" name="Home" render={(props) =>{
                  return (
                    <Flowbite theme={{ dark: initialMode }}>
                      <DefaultLayout {...props} DarkThemeToggle={DarkThemeToggle}/> 
                    </Flowbite>
                  )
                }}
              />
            }
          </Switch>
        </React.Suspense>
      </BrowserRouter>
      
    </>
  );
}

export default App;
