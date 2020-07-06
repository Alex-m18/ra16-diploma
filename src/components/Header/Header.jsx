import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LinksList from '../LinksList/LinksList';

export default function Header({ match }) {
  const { headerLinks } = useSelector(state => state.globalSettings);

  return (
    <header className='container'>
      <div className='row'>
        <div className='col'>
          <nav className='navbar navbar-expand-sm navbar-light bg-light'>
            <Link to={'/'} className='navbar-brand'>
              <img src='/img/header-logo.png' alt='Bosa Noga' />
            </Link>

            <div className='collapase navbar-collapse' id='navbarMain'>
              <LinksList
                className={'navbar-nav mr-auto'}
                links={headerLinks}
                activateLink
                match={match}
              />

              <div>
                <div className='header-controls-pics'>
                  <div
                    data-id='search-expander'
                    className='header-controls-pic header-controls-search'
                  ></div>

                  <div className='header-controls-pic header-controls-cart'>
                    <div className='header-controls-cart-full'>1</div>
                    <div className='header-controls-cart-menu'></div>
                  </div>
                </div>
                <form
                  data-id='search-form'
                  className='header-controls-search-form form-inline invisible'
                >
                  <input className='form-control' placeholder='Поиск' />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
