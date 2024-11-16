"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
// import {useState} from "react"
function Navebar() {
  const [menuOpen, setMenueOpen] = useState(false);
  const handleNav = () => {
    setMenueOpen(!menuOpen);
  };
  return (
    <>
    <p className="font-serif">+989057440908</p>
    <nav className="flexed w-full h-24 shadow-xl bg-purple-200">
      <div className="flex justify-between items-center h-full w-full px4 2xl:px-16">
        <Link href="/">
          <Image
            src={
              "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
            }
            alt="logo"
            width="90"
            height="75"
            className="curser-pointer"
            //  priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href={"/about"}>
              <li className="ml-10 uppercase hover:border-b text-xl font-serif ">
                whay us
              </li>
            </Link>
            <Link href={"./contact"}>
              <li className="ml-10 uppercase hover:border-b text-xl">
                contact us
              </li>
            </Link>
            <Link href={"/blog"}>
              <li className="ml-10 uppercase hover:border-b text-xl">Blog</li>
            </Link>
            <Link href={"/serves"}>
              <li className="ml-10 uppercase hover:border-b text-xl">
                Oure services
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ese-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
<div className="flex w-full items-center justify-end">
  <div onClick={handleNav} className="cursor-pointer" >
    <AiOutlineClose size={25} />
  </div>
</div>

        <div className="flex-col py-4">
          <ul className="">
            <Link href={"/about"}>
              <li
                onClick={() => setMenueOpen(false)}
                className="py-4 cursor-pointer"
              >
                whay us
              </li>
            </Link>
            <Link href={"./"}>
              <li
                onClick={() => setMenueOpen(false)}
                className="py-4 cursor-pointer"
              >
                contact us
              </li>
            </Link>
            <Link href={"/contact"}>
              <li
                onClick={() => setMenueOpen(false)}
                className="py-4 cursor-pointer"
              >
                Blog
              </li>
            </Link>
            <Link href={"/serves"}>
              <li
                onClick={() => setMenueOpen(false)}
                className="py-4 cursor-pointer"
              >
                Oure services
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
        <Link href="/">
          <Image
            src={
              "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
            }
            alt="logo"
            width="90"
            height="75"
            className="curser-pointer pt-6"
            //  priority
          />
        </Link>
      </div>
    </nav>
    </>
  );
}

export default Navebar;
