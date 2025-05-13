import React, { useState } from "react";
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "./assets/selection.json";

function CustIcoMoon({ iconName, size = 26, color, hoverColor = "#506aff" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IcomoonReact
        icon={iconName}
        iconSet={iconSet}
        size={size}
        color={isHovered && hoverColor ? hoverColor : color}
      />
    </span>
  );
}

export default CustIcoMoon;
