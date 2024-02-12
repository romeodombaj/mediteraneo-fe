import styles from "./SpecialSection.module.css";
import SpecialSectionOptions from "./SpecialSectionOptions";
import SpecialSectionRepresentation from "./SpecialSectionRepresentation";
import ShowItem from "../../../UI/ShowItem";
import { useEffect, useState } from "react";
import useGetItems from "../../../hooks/use-get-items";

import tempImage1 from "../../../../assets/graciozaKolekcija1.jpg";
import tempImage2 from "../../../../assets/graciozaKolekcija2.jpg";
import tempImage3 from "../../../../assets/graciozaKolekcija3.jpg";
import tempImage4 from "../../../../assets/graciozaKolekcija4.jpg";

const options = [
  {
    name: "Inspiracije",
    slug: "inspiracije",
    image: tempImage1,
  },
  {
    name: "Special prices",
    slug: "special_prices",
    image: tempImage2,
  },
  {
    name: "Zanimljivosti",
    slug: "zanimljivosti",
    image: tempImage3,
  },
  {
    name: "Novo u ponudi",
    slug: "novo_u_ponudi",
    image: tempImage4,
  },
];

const SpecialSection = () => {
  const [selectionIndex, setSelectionIndex] = useState(0);

  const [itemList, setItemList, getItemList] = useGetItems("showcase");

  useEffect(() => {
    getItemList(
      `?per_page=4&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`
    );
  }, [catCtx.categories]);

  useEffect(() => {
    if (itemList && itemList.length === 4) {
      for (let i = 0; i < 4; i++) {
        options[i].item = itemList[i];
      }
    }
  }, [itemList]);

  return (
    <div className={styles.wrapper}>
      <SpecialSectionOptions
        selectionIndex={selectionIndex}
        setSelectionIndex={setSelectionIndex}
        options={options}
      />

      <div className={styles["content-wrapper"]}>
        <SpecialSectionRepresentation image={options[selectionIndex].image} />
        <div className={styles["show-item"]}>
          {itemList && itemList[selectionIndex] && <ShowItem item={item} />}
        </div>
      </div>
    </div>
  );
};

export default SpecialSection;
