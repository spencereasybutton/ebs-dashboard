"use client";

import { useClerk } from "@clerk/nextjs";

export function LogoutButton() {
  const { signOut, loaded } = useClerk();

  return (
    <button
      type="button"
      disabled={!loaded}
      onClick={() => signOut({ redirectUrl: "/sign-in" })}
      style={{
        width: "100%",
        padding: "12px 14px",
        background: loaded ? "#dc2626" : "#7f1d1d",
        border: "none",
        color: "#fff",
        borderRadius: 12,
        cursor: loaded ? "pointer" : "not-allowed",
        fontWeight: 900,
      }}
    >
      Logout
    </button>
  );
}
