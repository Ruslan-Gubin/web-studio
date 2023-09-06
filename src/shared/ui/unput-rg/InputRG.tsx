import React, { FC, memo } from "react";
import { SearchIcon } from "./components/SearchIcon/SearchIcon";
import { InputProps } from "./types";
import { topIconContainer } from "./helpers";
import { EaySvg } from "./components/EyeSvg/EyeSvg";

import "./InputRG.css";


const InputRG: FC<InputProps> = memo(
  ({
    className,
    value,
    searchClick,
    passwordEyeClick,
    variant,
    error,
    errorText,
    name,
    sizeInput = "md",
    placeholder,
    label,
    type = "text",
    colorBorderFocus='orange',
    ...props
  }) => {
    const classes = [`inputrg-input inputrg-size__${sizeInput} input-border__${colorBorderFocus}`];


    if (error) {
      classes.push("inputrg-error__input");
    }

    if (className) {
      classes.push(className);
    }

    const variants = {
      search: <SearchIcon onClick={searchClick} />,
      email: <span>@</span>,
      password: <EaySvg handleClick={passwordEyeClick && passwordEyeClick} />
    };

    return (
      <label htmlFor={name} className="inputrg-label">
        {error ? <p className="inputrg-error">{error && errorText}</p> : label}
        <input
          value={value}
          type={type}
          id={name}
          className={classes.join(" ")}
          placeholder={placeholder}
          {...props}
        />
        <div
          style={{ top: topIconContainer(label, sizeInput) }}
          className="inputrg-icon__container"
        >
          {variant && sizeInput !== "sm" && variants[variant]}
        </div>
      </label>
    );
  }
);

InputRG.displayName = 'InputRG';

export { InputRG };
