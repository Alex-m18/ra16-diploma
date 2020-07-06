import React, { /*useEffect,*/ Fragment, useState } from 'react'
// import PropTypes from 'prop-types'
// import { useSelector, useDispatch } from 'react-redux'
// import { imagesRequest, imagesSetShowIndex } from '../../actions';

function Image({ id, title, images = [] }) {
  // const { sources, showIndex } = useSelector(state => state.images.find((o) => o.id === id) || {});
  // const dispatch = useDispatch();

  const [showIndex, setShowIndex] = useState(0);

  // useEffect(() => {
  //   dispatch(imagesRequest({ id, sources: images }));
  //   return () => {}
  // }, []);

  const handleMouseEnter = () => {
    // if (sources.length > 1) dispatch(imagesSetShowIndex(1));
    if (images.length > 1) setShowIndex(1);
  }

  const handleMouseLeave = () => {
    // if (sources.length > 0) dispatch(imagesSetShowIndex(0));
    if (images.length > 1) setShowIndex(0);
  }

  return (
    <Fragment>
      { /*sources.length*/ images.length && <img 
        // src={sources[showIndex]}
        src={images[showIndex]}
        className='card-img-top img-fluid'
        alt={title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />}
    </Fragment>
  )
}

Image.propTypes = {

}

export default Image

