
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Link from "next/link";

function MebullNavegiseom() {
    return (
        <div className="">
            <div className="top-0 left-0 z-3 fixed h-screen md:hidden  w-[260px] bg-white ">
                <div className="bg-primary flex text-white font-semibold justify-between py-2.5 px-3 h-11">
                    <h1 className="text-xl"> Navigation</h1>
                    <X size={16} />
                </div>
                <div>
                    <Tabs defaultValue="account" className="w-full">
                        <TabsList className="w-full rotate-none">
                            <TabsTrigger className="rotate-[5px]" value="account">Menu</TabsTrigger>
                            <TabsTrigger className="rotate-[5px]" value="password">Category</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <div>
                                <ul className="pl-5 ">
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>Shop</Link>
                                    </li>
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>Campaign</Link>
                                    </li>
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>Blog</Link>
                                    </li>
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>
                                            Page
                                            <ChevronDown className="w-4 mt-1.5" />
                                        </Link>

                                        <ul className="bg-white p-3 shadow-lg border-t-3 border-t-primary mr-4 mb-2">
                                            <li>
                                                <Link className="flex items-center gap-x-0.5 hover:text-primary" href={"/"}><ChevronRight width={20} />About us</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center gap-x-0.5 hover:text-primary" href={"/"}><ChevronRight width={20} />About us</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center gap-x-0.5 hover:text-primary" href={"/"}><ChevronRight width={20} />About us</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center gap-x-0.5 hover:text-primary" href={"/"}><ChevronRight width={20} />About us</Link>
                                            </li>
                                            <li>
                                                <Link className="flex items-center gap-x-0.5 hover:text-primary" href={"/"}><ChevronRight width={20} />About us</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="flex pr-3 items-center hover:text-primary" href={"/"}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="password">
                            <div className="p-3">
                                <ul>
                                    <li className="flex flex-wrap justify-between group my-1">
                                        <Link className="flex group-hover:text-primary" href={"/"}><ChevronRight width={20} /> Women clothing</Link>
                                        <span className="w-6 h-6 bg-gray-200 flex justify-center items-center hover:bg-primary cursor-pointer">
                                            <ChevronDown className="group-hover:text-primary hover:text-white" size={20} />
                                        </span>
                                    </li>
                                    <li className="flex flex-wrap justify-between group my-1">
                                        <Link className="flex" href={"/"}><ChevronRight width={20} /> Men clothing</Link>
                                        <span className="w-6 h-6 bg-gray-200 flex justify-center items-center hover:bg-primary cursor-pointer">
                                            <ChevronDown className="group-hover:text-primary hover:text-white" size={20} />
                                        </span>

                                        <ul className="w-full border-l ml-5 pl-4">
                                            <li className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                <Link className="hover:text-primary" href={"/"}>Outerwear & Jackets</Link>
                                                <ul className="w-full border-l pl-4">
                                                    <li className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                        <Link className="hover:text-primary" href={"/"}>Outerwear & Jackets</Link>
                                                    </li>
                                                    <li className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                        <Link className="hover:text-primary" href={"/"}>Bottoms</Link>
                                                    </li>
                                                    <li className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                        <Link className="hover:text-primary" href={"/"}>Underwear</Link>
                                                    </li>
                                                    <li className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                        <Link className="hover:text-primary" href={"/"}>Accessories</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                <Link className="hover:text-primary" href={"/"}>Bottoms</Link>
                                            </li>
                                            <li className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                <Link className="hover:text-primary" href={"/"}>Underwear</Link>
                                            </li>
                                            <li className="my-1 relative before:absolute before:w-2 before:border-t before:-left-4 before:opacity-40 before:top-3.5">
                                                <Link className="hover:text-primary" href={"/"}>Accessories</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="my-1">
                                        <Link className="flex" href={"/"}><ChevronRight width={20} /> Children</Link>
                                    </li>
                                    <li className="my-1">
                                        <Link className="flex" href={"/"}><ChevronRight width={20} /> Electronics</Link>
                                    </li>
                                </ul>
                            </div>

                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default MebullNavegiseom;