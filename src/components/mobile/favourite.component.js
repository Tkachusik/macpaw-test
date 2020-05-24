import React from 'react';
import { connect } from 'react-redux';
import { closeFavouriteClick } from '../../actions';

const Favourite = ({ closeFavouriteClick, showModal, favourites }) => {
    const renderFavouriteJokes = () => {
        return Array.from(favourites).map(([id, joke]) => {
            const updated = new Date(joke.updated_at);
            const now = new Date();

            return(
                <div className="favourites-joke-item" key={joke.id}>
                    <div className="heart2">
                      <img src="/heart2.png" />
                    </div>
                    <div className="joke-content">
                      <div className="message2">
                        <img src="/message.png" />
                      </div>
                      <div className="joke">
                        <a href="#" className="link">
                          ID: {joke.id}
                        <img src="/link.png" />
                        </a>
                        <p className="text-string">{joke.value}</p>
                        <div className="last-update2">
                          <p>Last update: {parseInt(Math.abs(now - updated) / 36e5)} hours ago</p>
                        </div>
                      </div>
                    </div>
                </div>
            );
        });
    };

    if(showModal) {
        return(
            <div className="md-modal d-lg-none">
            <div className="row no-margin">
              <div className="col-md-5">
              </div>
              <div className="col-md-7 col-sm-12 min-vh-100 favourites">
                <div className="heading">
                  <div className="favourite-btn2" onClick={() => closeFavouriteClick()}>
                    <img src="/GroupX.png" className="elipse" />
                    <p className="text-favourite-mobile">Favourite</p>
                  </div>
                </div>
                <div className="favourites-jokes-list-mobile">
                  {renderFavouriteJokes()}
                </div>
              </div>
            </div>
          </div>
        );
    }
    
    return "";
}

const mapStateToProps = (state) => {
    return {
        showModal: state.showModal,
        favourites: state.favourites,
    }
}

const mapDispatchToProps = {
    closeFavouriteClick,
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);