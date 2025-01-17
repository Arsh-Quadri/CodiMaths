"use client";

import { handleLogout } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";

interface ProfileDropdownProps {
  user: {
    name?: string | null;
    image?: string | null;
  };
}

const ProfileDropdown = ({ user }: ProfileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Image */}
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={user.image || "/default-profile.png"}
          alt="Profile"
          width={35}
          height={35}
          className="rounded-full cursor-pointer translate-y-1"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2.5 border border-gray-600 w-40 bg-primary-exdark font-medium shadow-md rounded-md p-2 z-50">
          <p className="px-4 py-2 text-sm text-primary-fontcol">{user.name}</p>

          {/* Logout Form */}
          <form action={handleLogout}>
            <button
              type="submit"
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-primary-dark rounded-sm"
            >
              Logout
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
