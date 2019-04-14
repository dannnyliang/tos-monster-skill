import React, { useState, useEffect } from 'react';
import lowerCase from 'lodash/lowerCase';

import { ATTRIBUTES, RACES } from '../constant';
import './style.css';

const reference = (category, type) => {
  switch (category) {
    case 'race':
      const race = Object.values(RACES).find(({ label }) => label === type);
      return lowerCase(race.id);

    case 'attribute':
      const attribute = Object.values(ATTRIBUTES).find(
        ({ label }) => label === type,
      );
      return lowerCase(attribute.id);

    default:
      break;
  }
};

function ImageMacher(props) {
  const { category, label } = props;

  const [imageTag, setImageTag] = useState({
    image: <img src="" alt="" width="40" height="40" />,
    isImported: false,
  });
  const type = reference(category, label);

  useEffect(() => {
    if (imageTag.isImported || !type) return;
    import(`../asset/images/${category}-${type}.png`).then(img => {
      setImageTag(() => ({
        image: <img src={img.default} alt="" width="40" height="40" />,
        isImported: true,
      }));
    });
  });

  return (
    <div className="d-flex align-items-center">
      {imageTag.image}
      <div className="px-3">{label}</div>
    </div>
  );
}

export default ImageMacher;
