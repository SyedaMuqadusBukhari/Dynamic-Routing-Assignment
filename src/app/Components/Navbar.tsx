import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" bg-yellow-500 p-2 text-black font-bold text-xl flex justify-between underline">
        <Link className="ml-5" href={"/"}>
          Home
        </Link>
        <Link href={"/country"}>Country</Link>
        
      </div>
    </>
  );
};
export default Navbar;