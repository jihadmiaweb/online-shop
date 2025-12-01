import PublicMainMenu from "@/components/public/mainMenu";
import { MapPin } from "lucide-react";
import Link from "next/link";

function PublicHider() {
    return (
        <>
            <div className="bg-primary">
                <div className="my-container">
                    <div className=" flex justify-between items-center py-2">
                        <div className="text-white ">
                            <Link className="flex" href={"/"}>
                                <MapPin />
                                Track Order
                            </Link>
                        </div>
                        <div className="flex gap-x-3  text-white">
                            <a className="border-r pr-3" href="tel:01940386783">01940386783</a>
                            <Link href={"/"}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <PublicMainMenu />
        </>
    );
}

export default PublicHider;