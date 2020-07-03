import React, { useState } from "react";
import RecipeItem from "./RecipeItem";
import Pagination from "./Pagination";

const Recipes = (props) => {
  const { recipes } = props;
  const [showPerPage, setShowPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <>
      <div className="card-columns" key={Math.random()}>
        {recipes.slice(pagination.start, pagination.end).map((recipe) => (
          <RecipeItem
            key={recipe.recipe.label}
            name={recipe.recipe.label}
            image={recipe.recipe.image}
            // ingredientLines={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={recipes.length}
      />
    </>
  );
};

export default Recipes;