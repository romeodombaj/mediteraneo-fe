import { useEffect, useState } from "react";

const useColorManagment = (colors = undefined) => {
  const [colorNames, setColorNames] = useState();
  const [colorHashes, setColorHashes] = useState();

  const getColorName = () => {
    let temp = [];

    colors.forEach((color) => {
      temp.push(color.substr(0, color.lastIndexOf("#")));
    });

    setColorNames(temp);
  };

  const getColorHash = () => {
    console.log("GETTING");
    let temp = [];

    colors.forEach((color) => {
      temp.push("#" + color.substr(color.lastIndexOf("#") + 1));
    });

    setColorHashes(temp);
  };

  useEffect(() => {
    getColorName();
    getColorHash();
  }, [colors]);

  return [colorNames, colorHashes];
};

export default useColorManagment;
