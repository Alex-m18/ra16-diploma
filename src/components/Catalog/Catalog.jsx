import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../CardList/CardList';
import Categories from '../Categories/Categories';
import Preloader from '../Preloader/Preloader';
import { catalogRequest } from '../../redux/catalog/actions';

export default function Catalog({ text }) {
  const { items, loading, error } = useSelector(state => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(catalogRequest());
    return () => {};
  }, []);

  return (
    <section className='catalog'>
      { text && <h2 className='text-center'>{text}</h2> }
      { (!loading && !error) &&
        <Fragment>
          <Categories />
          <CardList items={items} />
        </Fragment>
      }
      { (loading || error) && <Preloader />}
    </section>
  )
}

Catalog.defaultProps = {
  text: 'Каталог',
}

Catalog.propTypes = {
  text: PropTypes.string,
}
