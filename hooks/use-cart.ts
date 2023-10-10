import { create } from "zustand"
import { persist, createJSONStorage} from "zustand/middleware"
import { toast as hotToast } from "react-hot-toast";

import { Subcription } from "@/types"


interface CartStore{
    items: Subcription[];
    addItem: (data: Subcription) => void;
    removeItem: (title: string) => void;
    deductQuantity: (title: string) => void;
    addQuantity: (title: string) => void;
    removeAll: () => void;
}

const UseCart = create(
    persist<CartStore>((set, get)=> ({
        items: [],
        addItem: (data: Subcription) =>{

            const currentItems = get().items;
            const existingItems = currentItems.find((item)=> item.title === data.title);

                if(existingItems){
                    currentItems.map((item)=>(
                        item.title === data.title ? item.year = data.year + 1 : item
                    ));
                    set({items:[...currentItems]})
                }else {
                    if(currentItems.length != 0){
                        hotToast.success("There is an item\(s\) already on the cart, Please remove the current items first");
                    }else{
                        data.year = 1;
                        set({ items: [...get().items, data]});
                        hotToast.success("Item added to cart")
                    }
                }         

            
        },
        deductQuantity: (title: string)=>{
            const currentItems = get().items;
            const existingItem =  currentItems.find((item)=> item.title === title);

            if(existingItem && existingItem.year >= 1){

                currentItems.map((item)=>(
                    item.title === title ? item.year = item.year  - 1 : item
                ));

                set({items:[...currentItems]}) 
            }

            if(existingItem && existingItem.year == 0){

                set({ items: [...get().items.filter((item) => item.title != title)]});
                hotToast.success("Item removed from the cart");
            }
        },

        addQuantity: (title: string)=>{
            const currentItems = get().items;
            const existingItem =  currentItems.find((item)=> item.title === title);

            if(existingItem){

                currentItems.map((item)=>(
                    item.title === title ? item.year = item.year  + 1 : item
                ));

                set({items:[...currentItems]}) 
            }
        },
        removeItem: (title: string) =>{
            set({ items: [...get().items.filter((item) => item.title != title)]});
            hotToast.success("Item removed from the cart");
        },

        removeAll: ()=> set({ items:[] }),

        
    }), {
        name: "cart-storage",
        storage: createJSONStorage(()=> localStorage)
    })
);

export default UseCart