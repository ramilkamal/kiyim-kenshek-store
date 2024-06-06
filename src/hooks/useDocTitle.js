import { useEffect } from "react";

const useDocTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - Kiyim Nukus`;
    } else {
      document.title = "Kiyim | Nukus";
    }
  }, [title]);

  return null;
};

export default useDocTitle;
