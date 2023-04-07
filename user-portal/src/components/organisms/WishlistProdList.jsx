import Card from "../molecules/Card";
import React, { useEffect, useState } from "react";
import EmptyWishlist from "../molecules/EmptyWishlist";
import { getData, deleteData } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WishlistProdList() {
  const [wishlist, setWishlist] = useState([]);
  const userid = JSON.parse(localStorage.getItem('userData'))
  const tempid = JSON.parse(localStorage.getItem('tempId'))
  console.log(userid._id,tempid)

  useEffect(() => {
    getData(`wishlist/${userid._id ?userid._id:tempid}`).then((res) => {
      setWishlist(res.wishlistData.products);
    });
  }, []);

  async function handleDelete(product) {
    try {
      const res = await deleteData(
        `wishlist/640b2fc011ca53eae736b4d5/${product.productId}`
      );
      if (res.status === true) {
        setWishlist(wishlist.filter((p) => p.productId !== product.productId));
        toast.success("item removed successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          bodyClassName: "my-toast-body",
          className: "my-toast",
          icon: (
            <div className="d-flex justify-content-between w-100">
              <img
                className="toast-icon"
                src={product.selectedVarient[0].images[0]}
                alt="Product"
              />
            </div>
          ),
        });
      } else {
        throw new Error("Product could not be deleted");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  const noOfProd = wishlist.length;
  return (
    <>
      <div className="wishlist__container-bg">
        {noOfProd === 0 ? (
          <EmptyWishlist />
        ) : (
          <>
            <ToastContainer />
            <h1 className="wishlist__container-heading">
              my wishlist <span> {noOfProd} items</span>
            </h1>
            <div className="row d-flex wishlist_product-details">
              {wishlist.map((product) => (
                <Card
                  key={product._id}
                  product={product}
                  onDelete={() => handleDelete(product)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default WishlistProdList;
