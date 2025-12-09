"use client";

import Producartlist from "@/components/producartlist";
import ActiveOvaraly from "@/components/ui/activeOvarily";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";



function ProductCart() {
    const [active, setactive] = useState(false)

    return (
        <div className="flex relative flex-col  justify-center items-center">
            <Link href={"/"}>
                <span className="absolute -top-1.5 -right-1 flex justify-center items-center min-w-4 h-4 rounded-2xl text-xs  text-white  bg-primary">9</span>
                <ShoppingCart onClick={() => setactive(true)} size={22} />
                <span className="text-xs hidden md:block">Cart</span>
            </Link>

            {
                active && <Producartlist />
            }



            <ActiveOvaraly isactive={active} onclick={() => setactive(false)} />
        </div>
    );
}

export default ProductCart;