import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <>
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="text-center">
                    {
                    cartItems.length <= 0 ?
                        <h2 className="text-black">You Don't have any items in cart please add items in it.</h2>
                        :
                        <button className="p-2 m-2  bg-black text-white cursor-pointer"  
                        onClick={handleClearCart}>
                            Clear Cart
                        </button>
                    }
                </div>
                <ItemList items={cartItems} />
            </div>
        </div>
        </>
    )
}

export default Cart;