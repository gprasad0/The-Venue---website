import React from "react";
import Button from "@material-ui/core/Button";
import ButtonIcon from "../../resources/images/icons/ticket.png";

const Buttons = props => {
  return (
    <div>
      <Button href={props.href} style={{ background: props.color }}>
        <img className="iconImage" alt="icon_button" src={ButtonIcon} />
        {props.text}
      </Button>
    </div>
  );
};

export default Buttons;
