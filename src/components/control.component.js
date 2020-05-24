import React from 'react';
import { connect } from 'react-redux';
import { controlRadioButtonClick, categoriesClick, searchTextChange, getJoke } from '../actions';

const Control = ({ controlRadioButtonClick, searchType, categoriesClick, category, searchTextChange, searchText, getJoke }) => {
    return (
        <div className="content">
            <p className="hello">Hey!</p>
            <p className="find">Let's try to find a joke for you</p>
            <div className="form-check form-check-position">
                <input onChange={() => controlRadioButtonClick('random')} className="form-check-input" type="radio" name="joke-search" value="random" checked={searchType === "random"} />
                <label className="form-check-label" htmlFor="exampleRadios1">
                    Random
        </label>
            </div>
            <div className="form-check">
                <input onChange={() => controlRadioButtonClick('category')} className="form-check-input" type="radio" name="joke-search" value="categories" checked={searchType === "category"} />
                <label className="form-check-label" htmlFor="exampleRadios1">
                    From categories
        </label>
            </div>
            {
                (searchType === "category") ?
                    <div>
                        <button onClick={() => categoriesClick('animal')} type="button" className={category=== 'animal' ? 'btn btn-light forma active' : 'btn btn-light forma'}>ANIMAL</button>
                        <button onClick={() => categoriesClick('career')} type="button" className={category === 'career' ? 'btn btn-light forma active' : 'btn btn-light forma'}>CAREER</button>
                        <button onClick={() => categoriesClick('celebrity')} type="button" className={category === 'celebrity' ? 'btn btn-light forma active' : 'btn btn-light forma'}>CELEBRITY</button>
                        <button onClick={() => categoriesClick('dev')} type="button" className={category === 'dev' ? 'btn btn-light forma active' : 'btn btn-light forma'}>DEV</button>
                    </div>
                    :
                    ""
            }
            <div className="form-check">
                <input onChange={() => controlRadioButtonClick('search')} className="form-check-input" type="radio" name="joke-search" value="search" checked={searchType === "search"} />
                <label>
                    Search
        </label>
            </div>
            {
                (searchType === "search") ?
                    <div>
                        <input onChange={(event) => searchTextChange(event.target.value)} className="radius search-text position-text" type="text" value={searchText} placeholder="Free text search.." />
                    </div>
                    :
                    ""
            }
            <div>
                <button onClick={() => getJoke(searchType, category, searchText)} type="button" className="btn btn-primary">Get a joke</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchType: state.searchType,
        category: state.category,
        searchText: state.searchText,
    }
}

const mapDispatchToProps = {
    controlRadioButtonClick,
    categoriesClick,
    searchTextChange,
    getJoke,
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);