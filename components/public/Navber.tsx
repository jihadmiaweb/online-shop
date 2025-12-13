import GrouphoverCategories from "@/components/grouphoverCategories";
import MebullNavegiseom from "@/components/public/MebullNavegiseom";

import { ChevronDown, ChevronRight, X, } from "lucide-react";
import Link from "next/link";

function Navber() {
    return (
        <>
            <div className="bg-white hidden md:block  ">
                <div className="my-container">
                    <div className="flex">
                        <div className="relative bg-white ">
                            <GrouphoverCategories />
                        </div>

                        <div className=" ">
                            <ul className="flex pl-5 ">
                                <li className="flex items-center pr-3 hover:text-primary h-12"><Link href={"/"}>Home</Link></li>
                                <li className="flex items-center pr-3 hover:text-primary h-12"><Link href={"/"}>Shop</Link></li>
                                <li className="flex items-center pr-3 hover:text-primary h-12"><Link href={"/"}>Campaign</Link></li>
                                <li className="flex items-center pr-3 hover:text-primary h-12"><Link href={"/"}>Blog</Link></li>


                                <li className="relative group">
                                    <Link className="flex z-10  items-center pr-3 hover:text-primary h-12" href={"/"}>Pages <ChevronDown className="mt-1.5 w-4" /></Link>
                                    <ul className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible  p-2  border-t-3 border-primary
                                     left-0 top-12 w-44  z-1 bg-white shadow-lg  h-40">
                                        <li><Link className="flex hover:text-primary items-center " href={"/"}><ChevronRight className="w-5" />About Us</Link></li>
                                        <li><Link className="flex hover:text-primary items-center" href={"/"}><ChevronRight className="w-5" />How It Works</Link></li>
                                        <li><Link className="flex hover:text-primary items-center" href={"/"}><ChevronRight className="w-5" />Privacy Policy</Link></li>
                                        <li><Link className="flex hover:text-primary items-center" href={"/"}><ChevronRight className="w-5" />Terms & Service</Link></li>
                                        <li><Link className="flex hover:text-primary items-center" href={"/"}><ChevronRight className="w-5" />Return Policy</Link></li>
                                    </ul>


                                </li>
                                <li className="flex items-center pr-3 hover:text-primary h-12"><Link href={"/"}>Contact </Link></li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
            <MebullNavegiseom />
        </>
    );
}

export default Navber; 
