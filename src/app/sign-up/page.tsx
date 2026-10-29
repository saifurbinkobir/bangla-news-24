"use client"
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = () => {
    const handleSignIn = async(e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {name: string, email: string, image: string, password: string};
        
        const {data, error} = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        });
        if(data){
            redirect("/");
        }
        if(error){
            console.log(error);
        }
    }
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>
      <form onSubmit={handleSignIn}>
        <fieldset className="fieldset w-md rounded-box">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="নাম"
          />

          <label className="label">Image URL</label>
          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="Image URL"
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="ইমেইল"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="পাসওয়ার্ড"
          />

          <button type="submit" className="btn bg-red-600 text-white mt-4">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
