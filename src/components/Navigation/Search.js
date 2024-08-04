import styles from "./Search.module.css";
import searchIcon from "../../assets/navigation/search.png";
import { useState } from "react";
import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";

export default function Search({ navigationTransparency, navCtx }) {
  const [isSearching, setIsSearching] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const closeInputSmoothly = () => {
    setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        setIsSearching(false);
        setIsClosing(false);
      }, [300]);
    }, [500]);
  };

  const searchTerm = () => {
    if (isSearching) {
      navigate(`/search/${searchValue.length > 0 ? searchValue : "*"}`);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, [10]);
      closeInputSmoothly();
    } else {
      setIsSearching(true);
    }
  };

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchTerm();
    }
  };

  return (
    <main
      className={styles.main}
      onBlur={() => {
        closeInputSmoothly();
      }}
    >
      {isSearching && (
        <div
          className={`${styles.input} ${isClosing && styles[`input-close`]}`}
        >
          <Input
            onKeyDown={_handleKeyDown}
            value={searchValue}
            setValue={setSearchValue}
            autoFocus={true}
            placeholder="Pretraživanje."
            noBorder={
              !(navigationTransparency && !navCtx.cartOpen && !navCtx.savedOpen)
                ? false
                : true
            }
          />
        </div>
      )}
      <img
        className={`${styles[`nav-item`]} ${styles.search} ${
          styles[
            !(
              navigationTransparency &&
              !navCtx.cartOpen &&
              !navCtx.savedOpen
            ) && `nav-img-item`
          ]
        }`}
        src={searchIcon}
        onClick={() => {
          searchTerm();
        }}
      />
    </main>
  );
}
