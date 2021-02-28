import P from 'prop-types';
import { useState } from 'react';
import cx from 'classnames';

import styles from './ImagesPreview.module.sass';

const ImagesPreview = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedImage = images[selectedImageIndex];

  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <img src={selectedImage.src} alt={selectedImage.alt} />
      </div>
      <div className={styles.slider}>
        {images.map(({ src, alt }, index) => (
          <button
            type="button"
            onClick={() => setSelectedImageIndex(index)}
            className={cx(styles.sliderItem, { [styles.sliderItemSelected]: selectedImageIndex === index })}
          >
            <img src={src} alt={alt} />
          </button>
        ))}
      </div>
    </div>
  );
};

ImagesPreview.propTypes = {
  images: P.arrayOf(
    P.shape({
      src: P.string,
      alt: P.string,
    }),
  ),
};

export default ImagesPreview;
