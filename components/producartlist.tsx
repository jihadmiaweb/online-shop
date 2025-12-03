import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


function Producartlist() {


    return (
        <div className="absolute mt-4 z-9 bg-white top-full w-66 right-0 border p-2  ">
            <div className="overflow-y-scroll h-64">

                {[1, 2, 3, 4,].map(data => (




                    <div key={data} className=" flex relative pb-3 mb-3 border-b">
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="alt"
                            width={200}
                            height={200}
                            className="w-16 h-16"
                        />
                        <div className="pl-3">
                            <h3 className=" font-semibold hover:text-primary"> UMIDIGI A9 Pro Android Mobile...</h3>
                            <small className="text-xs font-normal block">1 x $144.83</small>

                        </div>
                        <div className=" text-primary">
                            <X size={16} className="cursor-pointer" />
                        </div>

                    </div>
                ))}
            </div>
            <div>
                <h1 className="text-xl font-semibold text-center">Subtotal: $3,080.67</h1>
                <div className="flex justify-between p-2">
                    <Button asChild>
                        <Link href={"/"}>Cart</Link>
                    </Button>

                    <Button asChild>
                        <Link href={"/"}>Checkout</Link>
                    </Button>
                </div>
            </div>



        </div>
    );
}

export default Producartlist;