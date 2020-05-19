import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="heading">
            <p className="msi">MSI 2020</p>
            <div className="d-md-block d-lg-none favourite-btn">
              <img src="/Group 22.png" className="elipse"/>
              <p>Favorites</p>
            </div>
          </div>
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
          <div className="jokes-list">
            <div className="joke-item">
              <div className="heart">
                <img src="/heart.png" />
              </div>
              <div className="joke-content">
                <div className="message">
                  <img src="/message.png" />
                </div>
                <div className="joke">
                  <a href="#" className="link">
                    ID: XNaAxUduSw6zANDaIEab7A
                    <img src="/link.png" />
                  </a>
                  <p className="text1">No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He must've conceived himself.</p>
                  <div className="last-update">
                    <p>Last update: 1923 hours ago</p>
                    <button type="button" className="btn btn-light">CELEBRITY</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="joke-item">
              <div className="heart">
                <img src="/heart.png" />
              </div>
              <div className="joke-content">
                <div className="message">
                  <img src="/message.png" />
                </div>
                <div className="joke">
                  <a href="#" className="link">
                    ID: XNaAxUduSw6zANDaIEab7A
                    <img src="/link.png" />
                  </a>
                  <p className="text1">No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He must've conceived himself.</p>
                  <div className="last-update">
                    <p>Last update: 1923 hours ago</p>
                    <button type="button" className="btn btn-light">CELEBRITY</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="joke-item">
              <div className="heart">
                <img src="/heart.png" />
              </div>
              <div className="joke-content">
                <div className="message">
                  <img src="/message.png" />
                </div>
                <div className="joke">
                  <a href="#" className="link">
                    ID: XNaAxUduSw6zANDaIEab7A
                    <img src="/link.png" />
                  </a>
                  <p className="text1">No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He must've conceived himself.</p>
                  <div className="last-update">
                    <p>Last update: 1923 hours ago</p>
                    <button type="button" className="btn btn-light">CELEBRITY</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 favourites min-vh-100 d-none d-lg-block">
          <p className="text-favourite">Favourite</p>
          <div className="favourites-jokes-list">
            <div className="favourites-joke-item">
              <div className="heart2">
                <img src="/heart2.png" />
              </div>
              <div className="joke-content">
                <div className="message2">
                  <img src="/message.png" />
                </div>
                <div className="joke">
                  <a href="#" className="link">
                    ID: XNaAxUduSw6zANDaIEab7A
                    <img src="/link.png" />
                  </a>
                  <p className="text-string">No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He must've conceived himself.</p>
                  <div className="last-update2">
                    <p>Last update: 1923 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="favourites-jokes-list">
            <div className="favourites-joke-item">
              <div className="heart2">
                <img src="/heart2.png" />
              </div>
              <div className="joke-content">
                <div className="message2">
                  <img src="/message.png" />
                </div>
                <div className="joke">
                  <a href="#" className="link">
                    ID: XNaAxUduSw6zANDaIEab7A
                    <img src="/link.png" />
                  </a>
                  <p className="text-string">No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He must've conceived himself.</p>
                  <div className="last-update2">
                    <p>Last update: 1923 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="favourites-jokes-list">
            <div className="favourites-joke-item">
              <div className="heart2">
                <img src="/heart2.png" />
              </div>
              <div className="joke-content">
                <div className="message2">
                  <img src="/message.png" />
                </div>
                <div className="joke">
                  <a href="#" className="link">
                    ID: XNaAxUduSw6zANDaIEab7A
                    <img src="/link.png" />
                  </a>
                  <p className="text-string">No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He must've conceived himself.</p>
                  <div className="last-update2">
                    <p>Last update: 1923 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
