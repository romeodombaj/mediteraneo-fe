import styles from "./SpecialSection.module.css";
import SpecialSectionOptions from "./SpecialSectionOptions";
import SpecialSectionRepresentation from "./SpecialSectionRepresentation";
import ShowItem from "../../../UI/ShowItem";
import { useEffect, useState, useContext, Fragment } from "react";
import useGetItems from "../../../hooks/use-get-items";
import CategoryContext from "../../../store/category-context";
// temp IMG
import tempImage1 from "../../../../assets/graciozaKolekcija1.jpg";
import tempImage2 from "../../../../assets/graciozaKolekcija2.jpg";
import tempImage3 from "../../../../assets/graciozaKolekcija3.jpg";
import tempImage4 from "../../../../assets/graciozaKolekcija4.jpg";

const options = [
  {
    name: "Inspiracije",
    slug: "inspiracije",
    image: tempImage1,
    item: undefined,
  },
  {
    name: "Special prices",
    slug: "special_prices",
    image: tempImage2,
    item: undefined,
  },
  {
    name: "Zanimljivosti",
    slug: "zanimljivosti",
    image: tempImage3,
    item: undefined,
  },
  {
    name: "Novo u ponudi",
    slug: "novo_u_ponudi",
    image: tempImage4,
    item: undefined,
  },
];

const SpecialSection = () => {
  const [selectionIndex, setSelectionIndex] = useState(0);
  const catCtx = useContext(CategoryContext);

  const [itemList, setItemList, getItemList] = useGetItems("showcase");
  const [isChanged, setIsChanged] = useState(false);

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

  useEffect(() => {
    setIsChanged(true);
    setTimeout(() => {
      setIsChanged(false);
    }, [1]);
  }, [selectionIndex]);

  return (
    <div className={styles.wrapper}>
      <SpecialSectionOptions
        selectionIndex={selectionIndex}
        setSelectionIndex={setSelectionIndex}
        options={options}
      />

      <div className={styles["content-wrapper"]}>
        {!isChanged && (
          <Fragment>
            <SpecialSectionRepresentation
              image={options[selectionIndex].image}
              name={options[selectionIndex].name}
            />
            <div className={styles["show-item"]}>
              {options &&
                options[selectionIndex] &&
                options[selectionIndex].item && (
                  <ShowItem
                    item={options[selectionIndex].item}
                    withDescription={true}
                  />
                )}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default SpecialSection;
