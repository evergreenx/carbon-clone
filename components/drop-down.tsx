"use client";
import React, { useState } from "react";
import Image from "next/image";
import GithubLogo from "../app/assets/github.svg";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { useClickOutside } from "@/hooks/use-click-outside";
import { User } from "@supabase/supabase-js";
import Link from "next/link";

export default function DropDown({
  data,
  logout,
  signIn,
}: {
  data: any;
  logout: () => void;
  signIn: () => void;
}) {
  const [showMenu, setShowMenu] = useState(false);

  const onClickOutside = () => {
    setShowMenu(false);
  };

  const clickRef = useClickOutside(onClickOutside);

  return (
    <div className="w-full flex justify-end p-6">
      {data.user ? (
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="border-2 space-x-4 p-2 border-white rounded text-white flex items-center  bg-primary h-[40px]"
        >
          <Image src={GithubLogo} width={20} alt="githublogo" />
          <p className="text-sm">{data.user?.user_metadata.full_name}</p>
        </button>
      ) : (
        <form action={signIn}>
          <button className="border-2 space-x-4 p-2 border-white rounded text-white flex items-center bg-primary h-[40px]">
            <Image src={GithubLogo} width={20} alt="githublogo" />

            <p className="text-sm">
              {data.user ? data.user?.user_metadata.full_name : "Signin/signup"}
            </p>
          </button>
        </form>
      )}

      {showMenu ? (
        <div
          ref={clickRef}
          className="text-white text-sm bg-primary absolute p-3 divide top-[80px] w-[160px] border-2 rounded "
        >
          <ul>
            <li>
              <Link href={"/snippets"}>Snippets</Link>
            </li>

            <li>
              <form
                action={() => {
                  logout();
                  setShowMenu(false);
                }}
              >
                <button className="text-sm text-gray-400 hover:underline hover:text-gray-300">
                  Logout
                </button>
              </form>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
