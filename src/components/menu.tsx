import React, { useState } from "react";

interface IProps {
  data: string[];
  selected?: number;
  className?: string;
  onClick?: (index: number) => {} | void;
}

const Menu = (props: IProps) => {
  const [curIndex, setCurIndex] = useState(props.selected);

  const handleToggle = (index: number) => {
    setCurIndex(index);
  };

  const liElm = props.data.map((label, index) => (
    <li
      className={curIndex === index ? "activated" : undefined}
      key={index}
      onClick={() => {
        handleToggle(index);
        if (props.onClick) props.onClick(index);
      }}>
      {label}
    </li>
  ));
  return <ul className={props.className}>{liElm}</ul>;
};

export default Menu;
