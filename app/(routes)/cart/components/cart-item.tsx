
import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Subcription } from "@/types";


interface CartItemProps {
  data: Subcription;
}

const CartItem: React.FC<CartItemProps> = ({
  data
}) => {
  
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.title);
  };

  return ( 
    <li className="flex py-6 border-b">
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute text-black z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">
              {data.title} 
            </p>
          </div>
            <p className="text-black"><Currency value={data.price} /></p>
        
        </div>
      </div>
    </li>
  );
}
 
export default CartItem;
