import React from 'react';
import { connect } from 'react-redux';
import { openFavouriteClick } from '../../actions';

const FavouriteBtn = ({ openFavouriteClick }) => (
    <div className="d-md-block d-lg-none favourite-btn" onClick={() => openFavouriteClick()}>
        <img src="/Group 22.png" className="elipse" />
        <p>Favorites</p>
    </div>
);

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
    openFavouriteClick,
}
export default connect(mapStateToProps, mapDispatchToProps)(FavouriteBtn);