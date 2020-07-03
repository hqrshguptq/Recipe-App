import React from "react";

const RecipeItem = (props) => {
  const { name, image, ingredientLines, ratio1, ratio2 } = props;
  if ({ ratio1 } > 15.0) {
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
  } else if ({ ratio1 } >= 12.0 && { ratio1 } <= 15.0) {
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
  } else if ({ ratio2 } > 50.0) {
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
      <div class="col-md-3">
        <div class="flip-card ">
          <div class="flip-card-inner text-center">
            <div class="flip-card-front">
              <img
                src={image}
                className="img-fluid w-50 mx-auto rounded-circle"
              />
              <div className="card-body">
                <h5>{name}</h5>
                <div className="filt">High Carb</div>
              </div>
            </div>

            <div class="flip-card-back overflow-auto">
              <ul className="list-group list-group-flush">
                {ingredientLines.map((ingredient) => (
                  <li className="list-group-item">{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RecipeItem;
