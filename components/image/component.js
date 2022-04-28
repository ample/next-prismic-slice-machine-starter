import React from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';
import path from 'path';
import { startCase } from 'lodash';

// ---------------------------------------------------------

import Link from '@components/link';
import SVG from './svgs';

// ---------------------------------------------------------

export const defaultAltAttribute = (image) => {
  const filename = path.basename(image, path.extname(image));
  return startCase(filename);
};

export const imageExtension = (image) => {
  const extension = path.extname(image);
  return extension;
};

// ---------------------------------------------------------

const Image = (props) => {
  if (!props.src) return null;

  // -------------------------------------------------------

  let {
    alt,
    className,
    height,
    layout,
    objectFit,
    objectPosition,
    placeholder,
    priority,
    quality,
    src,
    url,
    width,
  } = props;

  // -------------------------------------------------------

  const isSVG = imageExtension(src) === '.svg';

  // -------------------------------------------------------

  let image;

  if (isSVG) {
    image = <SVG className={className} src={src} />;
  } else {
    image = (
      <NextImage
        alt={alt || defaultAltAttribute(src) || ' '}
        blurDataURL={`${src}?fit=fill&w=10&h=10`}
        className={className}
        height={height}
        layout={layout}
        objectFit={objectFit}
        objectPosition={objectPosition}
        placeholder={placeholder ? placeholder : 'blur'}
        priority={priority}
        quality={quality}
        src={src}
        width={width}
      />
    );
  }

  // ---------------------------------------------------------

  let imageComponent;

  if (url) {
    imageComponent = <Link url={url}>{image}</Link>;
  } else {
    imageComponent = image;
  }

  return <>{imageComponent}</>;
};

Image.propTypes = {
  /**
   * Specifies the image alt text.
   */
  alt: PropTypes.string,

  /**
   * Specifies a CSS class on either the image or the wrapping element when an SVG is rendered.
   */
  className: PropTypes.string,

  /**
   * Specifies the height of the image
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Specifies the behavior of the image as the viewport changes size.
   */
  layout: PropTypes.oneOf(['fill', 'fixed', 'intrinsic', 'responsive']),

  /**
   * Specifies how the image is positioned within its parent element when using layout="fill"
   */
  objectFit: PropTypes.oneOf([
    'contain',
    'cover',
    'fill',
    'none',
    'scale-down',
  ]),

  /**
   * Specifies how the image is positioned within its parent element when using layout="fill".
   */
  objectPosition: PropTypes.string,

  /**
   * Specifies if a placeholder should be enabled while image loads.
   */
  placeholder: PropTypes.bool,

  /**
   * Specifies if the image should be considered high priority and preloaded.
   */
  priority: PropTypes.bool,

  /**
   * Specifies the quality of the optimized image, defaults to 75.
   */
  quality: PropTypes.number,

  /**
   * Specifies the image src.
   */
  src: PropTypes.string.isRequired,

  /**
   * Specifies where to link.
   */
  url: PropTypes.string,

  /**
   * Specifies the width of the image in pixels.
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Image.defaultProps = {};

export default Image;
