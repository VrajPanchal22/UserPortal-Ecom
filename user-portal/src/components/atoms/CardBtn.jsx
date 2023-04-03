import React from "react";
// import Button from "./Button";
import { FaTrash } from "react-icons/fa";
import Button from "./Button";

function CardBtn({ onClick }) {
  return (
    <div className="wishlist__btn-cart-del d-flex justify-content-between">
      {/* <Button
        type="button"
        className="btn btn-sm text-white wislist__btn--add2cart wislist__btn--add2cart--bg font-weight-bold"
        buttonText="Add to Cart"
      /> */}

      <Button
        type="button"
        className="btn btn-sm text-white wislist__btn--add2cart wislist__btn--add2cart--bg font-weight-bold"
        buttonText="Delete"
        icon={<FaTrash className="mb-1 mr-1" />}
        onClick={onClick}
      />
    </div>
  );
}

export default CardBtn;
