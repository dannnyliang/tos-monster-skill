import { useState, useEffect } from "react";
import isNil from "lodash/isNil";
import isEqual from "lodash/isEqual";

const useSelectedValues = ({ getValueSync, id, uploadValues }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const fetchValues = async () => {
    const SyncValues = await getValueSync(id);

    if (!isNil(SyncValues)) {
      return Object.keys(SyncValues).map(key => ({
        value: key,
        label: SyncValues[key]
      }));
    }
    return [];
  };

  const handleChange = options => {
    const labels = options.map(({ label }) => label);
    uploadValues(id, labels).then(() => {
      setSelectedOptions(options);
    });
  };

  useEffect(() => {
    fetchValues().then(res => {
      if (!isEqual(Object.values(selectedOptions), Object.values(res))) {
        setSelectedOptions(res);
      }
    });
  });

  return { selectedOptions, handleChange };
};

export default useSelectedValues;
