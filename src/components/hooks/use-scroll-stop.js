import { useEffect } from "react";

const useScrollStop = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
};

export default useScrollStop;
