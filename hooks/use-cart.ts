import { create } from "zustand"
import { persist, createJSONStorage} from "zustand/middleware"
import { toast } from "react-hot-toast";

import { Subcription } from "@/types"

interface CartStore{
    items: Subcription[];
    addItem: (data: Subcription) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const UseCart = create(
    persist<CartStore>((set, get)=> ({
        items: [],
        addItem: (data: Subcription) =>{
            const currentItems = get().items;
            const existingItems = currentItems.find((item)=> item.title === data.title);

            // if(existingItems){
            //     //function adding item by increasing number
            //     return toast("Item already in the cart")
            // }

            set({ items: [...get().items, data]});
            toast.success("Item added to cart")
        },
        removeItem: (id: string) =>{
            set({ items: [...get().items.filter((item) => item.title != id)]});
            toast.success("Item removed from the cart");
        },

        removeAll: ()=> set({ items:[] }),

    }), {
        name: "cart-storage",
        storage: createJSONStorage(()=> localStorage)
    })
);

export default UseCart