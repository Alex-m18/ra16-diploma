import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../CardList/CardList';
import Preloader from '../Preloader/Preloader';
import { topSalesRequest } from '../../actions';

export default function TopSales({ text }) {
  const { items, loading, error } = useSelector(state => state.topSales);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topSalesRequest());
    return () => {};
  }, []);

  return (
    <Fragment>
      { !error && 
        <section className='top-sales'>
          { text && <h2 className='text-center'>{text}</h2> }
          { loading && <Preloader />}
          { !loading && <CardList items={items} />}
        </section>
      }
    </Fragment>
  )
}

TopSales.defaultProps = {
  text: 'Хиты продаж!',
}

TopSales.propTypes = {
  text: PropTypes.string,
}