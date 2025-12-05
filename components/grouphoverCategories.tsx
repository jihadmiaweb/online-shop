
"use client";
import { ChevronRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


function GrouphoverCategories() {
    const [active, isactive] = useState(false)
    const menuData = [1, 2, 3, 4, 5]

    return (
        <>
            <div className="h-14  cursor-pointer  w-60 bg-primary">
                <h1 onClick={() => isactive(!active)} className="flex   items-center p-3 text-white font-semibold">
                    <Menu color="white" />
                    <span className="text-lg">Categories</span>
                </h1>
                {active &&
                    <div className="absolute top-full left-0 bg-white   w-full   py-3">

                        {
                            menuData.map((item, index) => (
                                <div key={item} className={`${(menuData.length - 1) == index ? "" : "border-b mb-2 pb-2"} flex   group items-center  cursor-pointer py-2 px-2 pb-2 mb-2`}>
                                    <Image
                                        src="https://geniusdevs.com/codecanyon/omnimart/core/public/storage/images/1629616296pexels-juan-mendez-1536619.jpg"
                                        width={100}
                                        height={100}
                                        alt="Product"
                                        className="w-12 h-12 object-cover group-hover:rotate-y-180"
                                    />
                                    <span className="block font-semibold pl-3 group-hover:text-primary">Categories</span>
                                    <ChevronRight className="w-5 ml-auto" />


                                    <div className="absolute top-0 h-full o  bg-white w-full left-full">
                                        <div className="py-2 px-2 pb-2 mb-2">
                                            <ul>
                                                {menuData.map((items) => (


                                                    <li key={items}> <Link className="w-full flex justify-between py-3 border-b" href={""}>
                                                        Sub category item
                                                        <ChevronRight />
                                                    </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            ))


                        }

                    </div>}


            </div>
        </>
    );
}

export default GrouphoverCategories;