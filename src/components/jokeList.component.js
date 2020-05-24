import React from 'react';
import { connect } from 'react-redux';
import { heartClick } from '../actions';

const JokeList = ({ heartClick, jokes, favourites }) => {
    const checkIfFavourite = (id) => {
        return favourites.has(id);
    };

    const renderJokes = () => {
        return jokes.map(joke => {
            const updated = new Date(joke.updated_at);
            const now = new Date();
            return(
                <div className="joke-item" key={joke.id}>
                    <div className="heart">
                        <img src={checkIfFavourite(joke.id) ? "/heart2.png" : "/heart.png"} onClick={() => heartClick(joke)} />
                    </div>
                    <div className="joke-content">
                        <div className="message">
                            <img src="/message.png" />
                        </div>
                        <div className="joke">
                            <a href={joke.url} className="link">
                                ID: {joke.id}
                <img src="/link.png" />
                            </a>
                            <p className="text1">{joke.value}</p>
                            <div className="last-update">
                                <p>Last update: {parseInt(Math.abs(now - updated) / 36e5)} hours ago</p>
                                <button type="button" className="btn btn-light celebtiry-Btn">CELEBRITY</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
    return (
        <div className="jokes-list">{renderJokes()}</div>
    )
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes,
        favourites: state.favourites,
    }
}

const mapDispatchToProps = {
    heartClick,
}
export default connect(mapStateToProps, mapDispatchToProps)(JokeList);