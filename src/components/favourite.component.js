import React from 'react';
import { connect } from 'react-redux';

const Favourite = ({ favourites }) => {
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

    return (
        <div className="col-lg-4 favourites min-vh-100 d-none d-lg-block">
            <p className="text-favourite">Favourite</p>
            <div className="favourites-jokes-list">
                {renderFavouriteJokes()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favourites: state.favourites,
    }
}

const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Favourite);