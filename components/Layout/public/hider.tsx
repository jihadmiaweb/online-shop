import PublicMainMenu from "@/components/public/mainMenu";
import Navber from "@/components/public/Navber";
import { Heart, MapPin } from "lucide-react";
import Link from "next/link";

function PublicHider() {
    return (
        <>
            <div className="bg-primary">
                <div className="my-container">
                    <div className="flex flex-col md:flex-row justify-between items-center py-2">

                        <div className="text-white">
                            <Link className="flex items-center gap-1" href={"/"}>
                                <MapPin />
                                Track Order
                            </Link>
                        </div>


                        <div className="flex gap-x-3 text-white pt-1 md:mt-0 items-center">


                            <Link
                                href={"/"}
                                className="flex md:hidden relative flex-col text-xs justify-center items-center"
                            >
                                <div className="flex text-white  font-semibold items-center gap-1">
                                    <Heart size={20} />
                                    <p className="text-[14px]">Wishlist</p>
                                </div>
                            </Link>


                            <a className="border-r pr-3" href="tel:01940386783">
                                01940386783
                            </a>


                            <Link href={"/"}>Login</Link>
                        </div>

                    </div>
                </div>
            </div>

            <PublicMainMenu />
            <Navber />
        </>
    );
}

export default PublicHider;