"use client";
// import Nextauth from "@api/auth/auth";
// import { signIn } from "next-auth/client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  console.log("Sign In");
  // console.log({ Nextauth });
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex w-[70vw] h-[80vh]  bg-white rounded-xl overflow-hidden">
        <div className="w-1/2 flex justify-center items-center flex-col bg-[#975C1F] gap-4">
          <div className="w-[70%] ">
            <h1 className="text-mainFont text-2xl font-bold ">
              SIGN IN TO YOUR{" "}
              <div>
                <span> ACOUNT</span>
              </div>
            </h1>
          </div>

          {/* <></> */}
          <div className="w-full flex gap-4 flex-col justify-center items-center">
            <Input
              className="w-[70%] rounded-xl"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              className="w-[70%] rounded-xl "
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="w-[70%] flex items-center  justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-xs  font-bold  text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember Me
              </label>
            </div>
            <h1 className="text-white font-bold text-xs">Forget password ? </h1>
          </div>
          <button
            className="mt-4 w-[70%] h-12 bg-[#B2AC88] hover:opacity-80 text-white font-bold rounded-xl"
            onClick={async () => {
              await signIn("credentials", {
                // redirect: false,
                email,
                password,
              })
                .then((res) => {
                  console.log({ res });
                })
                .catch((err) => {
                  console.log({ err });
                });
            }}
          >
            SIGN IN
          </button>
        </div>
        <div className="w-1/2 bg-slate-400"></div>
      </div>
    </div>
  );
}
