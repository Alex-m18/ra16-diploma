/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { categoryChangeSelection } from '../../redux/categories/actions';

export default function Categories() {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  
  const selectedCount = categories.filter((o) => o.selected).length;
  const selectCategoryAll = (selectedCount === categories.length);

  const changeSelectionToAll = (value) => {
    categories.forEach(o => {
      dispatch(categoryChangeSelection({ id: o.id, selected: value }))
    });
  }

  const handleClick = (evt, item) => {
    if (evt) evt.preventDefault();
    if (!item) {
      changeSelectionToAll(true);
      return;
    }
    if (selectCategoryAll) changeSelectionToAll(false);
    const { id, selected } = item;
    dispatch(categoryChangeSelection({ id, selected: !selected || selectCategoryAll}))
  }

  if (selectedCount === 0) {
    changeSelectionToAll(true);
    return;
  }

  return (
    <ul className={'catalog-categories nav justify-content-center'}>
      <li className={'nav-item'}>
        <a href={'#'}
          className={'nav-link' + (selectCategoryAll ? ' active' : '')}
          onClick={(evt) => handleClick(evt)}
        >{'Все'}</a>
      </li>
      {categories.map((o) =>
        <li className={'nav-item'} key={o.id}>
          <a href={'#'}
            className={'nav-link' + (!selectCategoryAll && o.selected ? ' active' : '')}
            onClick={(evt) => handleClick(evt, o)}
          >{o.title}</a>
        </li>
      )}
    </ul>
  )
}
