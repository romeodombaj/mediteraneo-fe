import styles from "./FrontPage.module.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

//temp images ...
import logo from "../../assets/logo.png";
import towels from "../../assets/ruc0.jpeg";
import kitchen from "../../assets/ruc1.jpg";
import bedroom from "../../assets/ruc2.jpg";

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

const FrontPage = () => {
  return (
    <Fragment>
      <div className={styles[`logo-section`]}>
        <img src={logo} className={styles.logo}></img>
      </div>
      <div className={styles[`category-section`]}>
        {category_info.map((category) => {
          return (
            <Link
              key={category.id}
              to={`/${category.id}`}
              state={{ category: category.id }}
              className={styles[`category-element`]}
            >
              <div className={styles[`info-container`]}>
                <div className={styles[`category-title`]}>{category.name}</div>
                {category.subcategory.map((subcategory) => {
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
              <img src={bedroom} className={styles[`category-image`]}></img>
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default FrontPage;
