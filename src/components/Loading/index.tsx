import React from "react";
import './styles.scss'

export const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__wrap">
        <img
          src="https://www.greenapplebooks.com/sites/greenapplebooks.com/themes/GreenApple2020/images/gab-logo.png"
          className="loading__img"
			 alt=''
        />
        <p className="loading__text">Loading...</p>
      </div>
    </div>
  );
};
