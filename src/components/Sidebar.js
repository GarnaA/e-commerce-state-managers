import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { handleClose } from "../redux/actions/sidebarActions";
import { CLEAR_CART } from "../redux/constants/Cartconstants";
import { selectCartItems, selectCartItemAmount, selectCartTotal } from "../redux/selectors/cartSelectors";
import { selectSidebarIsOpen } from "../redux/selectors/sidebarSelectors";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectSidebarIsOpen);
  const cart = useSelector(selectCartItems);
  const itemAmount = useSelector(selectCartItemAmount);
  const total = useSelector(selectCartTotal);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={() => dispatch(handleClose())}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span>${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/cart"}
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
