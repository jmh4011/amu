import React from "react";
import { getInitials } from "../utils/helper";

function ProfileInfo({ onLogout }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("Kang Jun Sung")}
      </div>

      <div>
        <p className="text-sm font-medium">Kang Jun Sung</p>
        <button className="text-sm text-white underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
