import { useState } from "react";

const useInput = (initialValue: any) => {
  const [value, setValue] = useState<any>();
  const reset = () => {
    setValue(initialValue);
  };
  const bind = {
    value,
    onChange: (e: any) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
};
export default useInput;
