import styles from "./ItemDescription.module.css";

const ItemDescription = (props) => {
  const item = props.item;

  const materialLength = item.attributes[4].options.length;

  return (
    <div className={styles.wrapper}>
      <div className={styles[`general-section`]}>
        <div className={styles.title}>OPIS PROIZVODA</div>
        <div
          className={styles.paragraph}
          dangerouslySetInnerHTML={{ __html: item.description }}
        ></div>
      </div>
      <div className={styles[`material-section`]}>
        <div className={styles.title}>MATERIJALI & ODRŽAVANJE</div>
        <div className={styles.subtitle}>Materijal:</div>
        <div className={styles.paragraph}>
          {item.attributes[4].options.map((option, i) => {
            if (i + 1 === materialLength) {
              return <span>{option}</span>;
            } else {
              return <span>{option}, </span>;
            }
          })}
        </div>
        <div className={styles.subtitle}>Njega:</div>
        {item.attributes[5].options.map((option, i) => {
          return <div className={styles.paragraph}>{option}</div>;
        })}
      </div>
    </div>
  );
};

export default ItemDescription;
