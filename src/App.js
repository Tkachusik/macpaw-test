import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <p className="msi">MSI 2020</p>
          <div className="content">
            <p className="hello">Hey!</p>
            <p classname="find">Let's try to find a joke for you</p>
            <div className="form-check form-check-position">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
              <label className="form-check-label" for="exampleRadios1">
                Random
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
              <label className="form-check-label" for="exampleRadios1">
                From categories
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
              <label>
                Search
              </label>
            </div>
            <div>
              <button type="button" className="btn btn-primary">Get a joke</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 favourites min-vh-100">
        </div>
      </div>
    </div>
  );
}

export default App;
