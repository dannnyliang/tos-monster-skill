import { useEffect, useState } from "react";
import isEqual from "lodash/isEqual";

const useSelectOptions = getOptionsSync => {
  const [options, setOptions] = useState([
    { value: "LOADING", label: "Loading...", isDisabled: true }
  ]);

  const fetchOptions = async () => {
    const SyncOptions = await getOptionsSync();

    return Object.keys(SyncOptions).map(key => ({
      value: key,
      label: SyncOptions[key]
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
