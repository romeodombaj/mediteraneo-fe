import { useContext, useEffect, useState } from "react";
import CategoryContext from "../store/category-context";
import SavedContext from "../store/saved-context";

const useGetItems = (storageValue = undefined) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(storageValue)) || []
  );

  const catCtx = useContext(CategoryContext);
  const saveCtx = useContext(SavedContext);

  const getData = async (path) => {
    if (catCtx.categories && catCtx.categories.length > 0) {
      let response = await fetch(
        `https://mediteraneo.eu/wp-json/wc/v3/products${path}&status=publish`,
        { mode: "cors" }
      );

      let value = await response.json();

      if (value.length > 0) {
        value = saveCtx.checkIfSaved(await value);
      }

      value = await value.sort((a, b) => a.price - b.price);

      setData(await value);

      if (storageValue !== undefined) {
        localStorage.setItem(storageValue, JSON.stringify(await value));
      }

      return await value;
    }
  };

  return [data, setData, getData];
};

export default useGetItems;
