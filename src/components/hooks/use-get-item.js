import { useEffect, useState } from "react";

const useGetItem = () => {
  const [item, setItem] = useState(undefined);
  const [itemVariations, setItemVariations] = useState([]);

  const getData = async (itemSlug) => {
    try {
      let response = await fetch(
        `https://mediteraneo.eu/wp-json/wc/v3/products?slug=${itemSlug}&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`,
        { mode: "cors" }
      );

      if (response.ok) {
        let value = await response.json();

        getItemVariations(value[0].id);
        setItem(value[0]);
      }
    } catch (error) {
      console.log("Fetch error: ", error.message);
    }
  };

  const getItemVariations = async (itemID) => {
    try {
      let response = await fetch(
        `https://mediteraneo.eu/wp-json/wc/v3/products/${itemID}/variations?per_page=100&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`
      );

      if (response.ok) {
        let value = await response.json();

        if (value) {
          setItemVariations([...value]);
        }
      }
    } catch (error) {
      console.log("Fetch error: ", error.message);
    }
  };

  return [
    item,
    itemVariations,
    setItem,
    setItemVariations,
    getData,
    getItemVariations,
  ];
};

export default useGetItem;
