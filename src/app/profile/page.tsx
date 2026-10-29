"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  const [show, setShow] = useState(false);
  const handleShowForm = () => {
    setShow(!show)
  }

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };
    await authClient.updateUser({
      ...newUserData
    });
    alert("Profile Updated");
  };

  return (
    <div className="mt-5 card bg-base-200 p-5 flex flex-col items-center">
      <div className="flex flex-col items-center gap-2">
        <Link href="/profile">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
        </Link>
        <h2 className="text-black">{user?.name}</h2>
        <h2 className="text-black">{user?.email}</h2>
        
        <button onClick={handleShowForm} className="btn bg-[#c10007] text-white" >
          এডিট প্রোফাইল 
        </button>
      </div>
      {show && <form onSubmit={handleUpdateProfile}>
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


          <button type="submit" className="btn bg-red-600 text-white mt-4">
            প্রোফাইল আপডেট করুন
          </button>
        </fieldset>
      </form>}
    </div>
  );
};

export default ProfilePage;
