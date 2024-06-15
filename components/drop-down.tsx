"use client";
import React, { useState } from "react";
import Image from "next/image";
import GithubLogo from "../app/assets/github.svg";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export default function DropDown({ data, logout, signIn }) {
  const [showMenu, setShowMenu] = useState(false);

  console.log(data);
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

      {!showMenu ? (
        <ul className="text-white text-sm bg-primary absolute p-3 divide top-12 w-[160px] ">
          <li>Snippets</li>

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
      ) : null}
    </div>
  );
}
