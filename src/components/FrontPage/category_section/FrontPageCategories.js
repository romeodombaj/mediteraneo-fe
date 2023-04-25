import { Fragment, useEffect, useState, useContext } from "react";
import styles from "./FrontPageCategories.module.css";
import { Link } from "react-router-dom";
import CategoryContext from "../../store/category-context";
import { useInView } from "react-intersection-observer";

// temp category images
import towels from "../../../assets/ruc0.jpeg";
import kitchen from "../../../assets/ruc1.jpg";
import bedroom from "../../../assets/ruc2.jpg";

// temp category info
const category_info = [
  {
    id: 0,
    name: "ručnici",
    codename: "rucnici",
    image: towels,
    subcategory: [
      {
        id: 0,
        name: "pordučnici",
      },
      {
        id: 1,
        name: "pordučnici",
      },
      {
        id: 2,
        name: "pordučnici",
      },
    ],
  },

  {
    id: 1,
    name: "Kuhinja",
    codename: "posteljina",
    image: kitchen,
    subcategory: [
      {
        id: 0,
        name: "pordučnici",
      },
      {
        id: 1,
        name: "pordučnici",
      },
      {
        id: 2,
        name: "pordučnici",
      },
    ],
  },
  {
    id: 2,
    name: "Posteljina",
    codename: "kuhinja",
    image: bedroom,
    subcategory: [
      {
        id: 0,
        name: "pordučnici",
      },
      {
        id: 1,
        name: "pordučnici",
      },
      {
        id: 2,
        name: "pordučnici",
      },
    ],
  },
];

const FrontPageCategories = () => {
  const [inAnimation, triggerInAnimation] = useInView();
  const [animationClass, setAnimationClass] = useState(``);
  const categoryCtx = useContext(CategoryContext);

  useEffect(() => {
    if (triggerInAnimation) {
      setAnimationClass(`in-animation`);
    }
  }, [triggerInAnimation]);

  return (
    <Fragment>
      <div className={styles[`category-section`]}>
        {categoryCtx.categories &&
          categoryCtx.categories.map((category) => {
            if (category.display === "default") {
              return (
                <Link
                  key={category.id}
                  to={`/${category.id}`}
                  state={{ category: category.id }}
                  className={`${styles[`category-element`]} ${
                    styles[animationClass]
                  }`}
                >
                  <div className={styles[`info-container`]}>
                    <div className={styles[`category-title`]}>
                      {category.name}
                    </div>
                    {categoryCtx.categories.map((subcategory) => {
                      if (subcategory.parent === category.id)
                        return (
                          <div
                            key={subcategory.id}
                            className={styles[`category-text`]}
                          >
                            {subcategory.name}
                          </div>
                        );
                    })}
                  </div>
                  <img
                    src={category.image.src}
                    className={styles[`category-image`]}
                  ></img>
                </Link>
              );
            }
          })}
        <div ref={inAnimation} className={styles[`category-trigger`]}></div>
      </div>
    </Fragment>
  );
};

export default FrontPageCategories;
