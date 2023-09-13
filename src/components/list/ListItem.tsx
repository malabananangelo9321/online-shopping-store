import React from "react";
import { ListItemProps } from "../../utils/PropsUtils";

const ListItem = (props: ListItemProps) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div>
      <ul>
        <li
          onClick={() => props.onSelectCategory("")}
          className={
            props.category === "" ? "list-container-bg" : "list-container"
          }
        >
          All Item
        </li>
        {props.categories.map((val) => {
          let classStyle: string = "list-container";
          if (props.category === val.category) {
            classStyle = "list-container-bg";
          }
          return (
            <li
              className={classStyle}
              key={val.category}
              onClick={() => props.onSelectCategory(val.category)}
            >
              {capitalizeFirstLetter(val.category)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListItem;
