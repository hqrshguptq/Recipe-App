import React from "react";

const RecipeItem = (props) => {
  const { name, image, ingredientLines, ratio1, ratio2 } = props;
  if ({ ratio1 } * 100 > 15) {
    return (
      <div className="card py-2 text-center">
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <div className="filt">High Protein</div>

        {/* <ul className="list-group list-group-flush">
        {ingredientLines.map((ingredient) => (
          <li className="list-group-item">{ingredient}</li>
        ))}
      </ul> */}
      </div>
    );
  } else if ({ ratio1 } >= 12 && { ratio1 } <= 15) {
    return (
      <div className="card py-2 text-center">
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <div className="filt">Balanced</div>
        {/* <ul className="list-group list-group-flush">
        {ingredientLines.map((ingredient) => (
          <li className="list-group-item">{ingredient}</li>
        ))}
      </ul> */}
      </div>
    );
  } else if ({ ratio2 } > 50) {
    return (
      <div className="card py-2 text-center">
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        {<div className="filt">High Carb</div>}
        {/* <ul className="list-group list-group-flush">
        {ingredientLines.map((ingredient) => (
          <li className="list-group-item">{ingredient}</li>
        ))}
      </ul> */}
      </div>
    );
  } else {
    return (
      <div className="card py-2 text-center">
        <img src={image} className="img-fluid w-50 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        {<div className="filt">Regular</div>}
        {/* <ul className="list-group list-group-flush">
        {ingredientLines.map((ingredient) => (
          <li className="list-group-item">{ingredient}</li>
        ))}
      </ul> */}
      </div>
    );
  }
};

export default RecipeItem;
