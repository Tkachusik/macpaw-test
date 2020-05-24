import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Control from './components/control.component';
import JokeList from './components/jokeList.component';
import Favourite from './components/favourite.component';
import FavouriteBtn from './components/mobile/favouriteBtn.component';
import FavouriteModal from './components/mobile/favourite.component';

function App() {
  return (
    <div className="app">
      <FavouriteModal />
      <div className="container-fluid">
        <div className="row no-margin">
          <div className="col-lg-8 col-md-12">
            <div className="heading">
              <p className="msi">MSI 2020</p>
              <FavouriteBtn />
            </div>
            <Control />
            <JokeList />
          </div>
          <Favourite />
        </div>
      </div>
    </div>
  );
}

export default App;
