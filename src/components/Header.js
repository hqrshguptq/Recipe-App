import React from "react";

const Header = (props) => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <span className="material-icons app-icon">restaurant_menu</span>{" "}
        FoodPorn
      </h1>
      <div className="input-group w-25 mx-auto margin:30px">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button className="btn" onClick={onSearchClick}>
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
