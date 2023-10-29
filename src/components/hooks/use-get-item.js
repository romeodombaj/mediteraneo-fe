import { useState } from "react";

const useGetItem = () => {
  const [item, setItem] = useState(undefined);
  const [itemVariations, setItemVariations] = useState([]);

  const getData = async (itemSlug) => {
    let response = await fetch(
      `https://mediteraneo.eu/wp-json/wc/v3/products?slug=${itemSlug}&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`,
      { mode: "cors" }
    );

    let value = await response.json();

    getItemVariations(value.id);
    setItem(...value);
  };

  const getItemVariations = async (itemID) => {
    console.log("here");
    let response = await fetch(
      `https://mediteraneo.eu/wp-json/wc/v3/products/${itemID}/variations?consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`
    );

    let value = await response.json();

    setItemVariations([...value]);
  };

  return [item, itemVariations, setItem, getData, getItemVariations];
};

export default useGetItem;
