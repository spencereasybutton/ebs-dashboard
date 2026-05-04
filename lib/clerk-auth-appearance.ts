import type { Appearance } from "@clerk/types";

/** Shared dark theme for `<SignIn />` and `<SignUp />` — PT Sans comes from root layout. */
export const clerkAuthAppearance: Appearance = {
  variables: {
    fontFamily: "inherit",
    fontFamilyButtons: "inherit",
    colorPrimary: "#dc2626",
    colorPrimaryForeground: "#ffffff",
    colorBackground: "#0c0c0f",
    colorText: "#ffffff",
    colorTextSecondary: "#a1a1aa",
    colorInput: "#18181b",
    colorInputText: "#ffffff",
    colorNeutral: "#3f3f46",
    colorBorder: "rgba(255,255,255,0.12)",
    colorRing: "#dc2626",
  },
  elements: {
    card: {
      backgroundColor: "#0c0c0f",
      border: "1px solid rgba(255,255,255,0.1)",
    },
    headerTitle: { color: "#ffffff" },
    headerSubtitle: { color: "#a1a1aa" },
    socialButtonsRoot: { width: "100%" },
    socialButtonsBlockButton: {
      backgroundColor: "#27272a",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.2)",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.4)",
    },
    socialButtonsBlockButtonText: {
      color: "#ffffff",
    },
    formButtonPrimary: {
      backgroundColor: "#dc2626",
      color: "#ffffff",
      border: "none",
    },
    formFieldLabel: { color: "#e4e4e7" },
    formFieldInput: { color: "#ffffff" },
    footer: { color: "#a1a1aa" },
    footerActionLink: { color: "#fca5a5" },
    dividerLine: { background: "rgba(255,255,255,0.12)" },
    dividerText: { color: "#71717a" },
    identityPreviewText: { color: "#ffffff" },
    identityPreviewEditButton: { color: "#fca5a5" },
    alternativeMethodsBlockButton: {
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.14)",
    },
  },
};
