
import ProductCart from "@/components/productCart";
import ProductSearchForm from "@/components/productSearchForm";
import PublickmineManuMobill from "@/components/public/mineManuMobill";
import { GitCompareArrows, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function PublicMainMenu() {
    return (
        <div className="py-4 relative">
            <div className="my-container">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image
                            src={"/logo.svg"}
                            alt="My logo"
                            width={160}
                            height={60}
                        />
                    </Link>
                    <div className="flex-1 hidden md:flex">
                        <ProductSearchForm />
                        <div>
                            <div className="flex gap-x-12">
                                <Link href={"/"} className="flex flex-col justify-center relative items-center">
                                    <span className="absolute -top-1 -right-1 flex text-xs justify-center items-center min-w-4 h-4 rounded-2xl  text-white font-semibold bg-primary">9</span>
                                    <GitCompareArrows size={22} />
                                    <span className="text-xs">Compare</span>
                                </Link>

                                <Link href={"/"} className="flex relative flex-col text-xs justify-center items-center">
                                    <span className="absolute -top-1 -right-1 flex justify-center items-center min-w-4 h-4 rounded-2xl  text-white font-semibold bg-primary">9</span>
                                    <Heart size={22} />
                                    <p className="text-xs">Wishlist</p>
                                </Link>
                                <ProductCart />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 md:hidden">
                        <PublickmineManuMobill />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublicMainMenu;