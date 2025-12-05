
"use client"

import ProductCart from "@/components/productCart";
import ProductSearchForm from "@/components/productSearchForm";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

function PublickmineManuMobill() {

    const [active, setactive] = useState(false)
    return (
        <div className="flex justify-end gap-x-2 bg-white ">
            <Search onClick={() => setactive(true)} className="hover:text-primary cursor-pointer" />
            <Menu className="hover:text-primary cursor-pointer" />
            <ProductCart />
            {active &&
                <div className="absolute items-center top-0 left-0 w-full bg-white h-full  flex justify-between">
                    <ProductSearchForm />
                    <div className="flex hover:text-primary justify-center items-center mr-6 ">
                        <X onClick={() => setactive(false)} className="cursor-pointer" />
                    </div>
                </div>
            }



        </div>
    );
}

export default PublickmineManuMobill;