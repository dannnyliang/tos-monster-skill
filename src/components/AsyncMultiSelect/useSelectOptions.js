import { useEffect, useState } from "react";
import isEqual from "lodash/isEqual";

const useSelectOptions = getOptionsAsync => {
  const [options, setOptions] = useState([
    { value: "LOADING", label: "Loading...", isDisabled: true }
  ]);

  const fetchOptions = async () => {
    const asyncOptions = await getOptionsAsync();

    return Object.keys(asyncOptions).map(key => ({
      value: key,
      label: asyncOptions[key]
    }));
  };

  useEffect(() => {
    fetchOptions().then(res => {
      if (!isEqual(Object.values(options), Object.values(res))) {
        setOptions(res);
      }
    });
  });

  return { options };
};

export default useSelectOptions;
