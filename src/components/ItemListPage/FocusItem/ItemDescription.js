import { Fragment } from "react";
import styles from "./ItemDescription.module.css";

const ItemDescription = (props) => {
  const item = props.item;

  const defaultText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className={styles.wrapper}>
      <div className={styles[`general-section`]}>
        <div className={styles.title}>OPIS PROIZVODA</div>
        {item.description.length > 0 ? (
          <div
            className={styles.paragraph}
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></div>
        ) : (
          <div>
            {defaultText}
            {defaultText}
          </div>
        )}
      </div>
      <div className={styles[`material-section`]}>
        <div className={styles.title}>MATERIJALI & ODRŽAVANJE</div>
        <div className={styles.subtitle}>Materijal:</div>
        <div className={styles.paragraph}>
          {item.attributes[4] && item.attributes[4].options
            ? item.attributes[4].options.map((option, i) => {
                if (i + 1 === item.attributes[4].options.length) {
                  return <span key={i}>{option}</span>;
                } else {
                  return <span key={i}>{option}, </span>;
                }
              })
            : defaultText}
        </div>

        {item.attributes[5] && item.attributes[5].options && (
          <Fragment>
            <div className={styles.subtitle}>Njega:</div>
            {item.attributes[5].options.map((option, i) => {
              return (
                <div key={i} className={styles.paragraph}>
                  {option}
                </div>
              );
            })}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ItemDescription;
