

import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { ChevronRight, MailIcon, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsYoutube } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";



function PublickFoter() {
    return (
        <div className="bg-white pt-16 ">
            <div className="my-container ">
                <div className="grid grid-cols-3 gap-x-5">
                    <div>
                        <h3 className=" text-lg font-semibold">Get In Touch</h3>
                        <span className="block h-0.5   bg-gray-200 mt-2 mb-5">
                            <span className="block w-20 h-0.5 bg-primary"></span>
                        </span>

                        <p>Address: 514 S. Magnolia St. Orlando, FL 32806, USA</p>


                        <p><strong>Phone:</strong> 453876234</p>
                        <p><strong>Email:</strong> demoemail123@gmail.com</p>
                        <p>Saturday-Sunday :: 9:27 PM - 9:27 PM</p>
                        <ul className="flex py-5 gap-x-2">

                            <li className="w-9 h-9 bg-primary btn-animate  flex justify-center items-center rounded-sm">
                                <a className="text-white" href=""><FaFacebook />
                                </a>
                            </li>
                            <li className="w-9 h-9 bg-primary  btn-animate flex justify-center items-center rounded-sm">

                                <a className="text-white" href=""><FaTwitter /></a>
                            </li>

                            <li className="w-9 h-9 bg-primary btn-animate  flex justify-center items-center rounded-sm">
                                <a className="text-white" href=""><BsYoutube /></a>
                            </li>

                            <li className="w-9 h-9 bg-primary btn-animate  flex justify-center items-center rounded-sm">
                                <a className="text-white" href=""><FaLinkedin /></a>
                            </li>

                        </ul>
                    </div>

                    <div className="">
                        <h3 className="font-semibold text-lg">Usefull Links</h3>
                        <span className="block h-0.5 mt-2  bg-gray-200">
                            <span className="bg-primary w-20 h-0.5 block"></span>
                        </span>
                        <div className="">

                            <ul className="flex flex-col gap-y-1.5">
                                <li className="">
                                    <Link className="flex hover:text-primary" href={"/"} ><ChevronRight className="w-5" />Faq</Link>
                                </li>

                                <li className="">
                                    <Link className="flex hover:text-primary" href={"/"} ><ChevronRight className="w-5" />About Us</Link>
                                </li>
                                <li className="">
                                    <Link className="flex hover:text-primary" href={"/"} ><ChevronRight className="w-5" />Privacy Policy</Link>
                                </li>

                                <li className="">
                                    <Link className="flex hover:text-primary" href={"/"} ><ChevronRight className="w-5" />Terms & Service</Link>
                                </li>


                                <li className="">
                                    <Link className="flex hover:text-primary" href={"/"} ><ChevronRight className="w-5" />Return Policy</Link>
                                </li>

                                <li className="">
                                    <Link className="flex hover:text-primary" href={"/"} ><ChevronRight className="w-5" />How It Works</Link>
                                </li>
                            </ul>

                        </div>

                    </div>

                    <div className="">
                        <h1 className="font-semibold text-lg">Newsletter</h1>
                        <span className="block h-0.5 bg-gray-200 mt-2 mb-5 "><span className="block h-0.5 bg-primary w-20"></span></span>
                        <form>
                            <InputGroup className=" rounded-xs">
                                <InputGroupInput placeholder="Your email" />
                                <InputGroupAddon>
                                    <MailIcon />
                                </InputGroupAddon>

                            </InputGroup>

                            <Button className="w-full mt-3 rounded-sm cursor-pointer btn-animate">Subscribe</Button>
                        </form>


                        <p className="py-4">Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</p>

                        <Image
                            src={"/1.png"}
                            alt="card image"
                            className="pb-3"
                            width={300}
                            height={50}
                        />
                    </div>
                </div>
                <p className="py-6 border-t text-center">
                    OmniMart © All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default PublickFoter;