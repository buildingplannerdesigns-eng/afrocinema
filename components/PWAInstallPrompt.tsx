"use client";
import { useEffect, useState } from "react";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as any);
      setShowPrompt(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted" || outcome === "dismissed") {
        setShowPrompt(false);
        setDeferredPrompt(null);
      }
    }
  };

  if (!showPrompt) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#0A0A0F",
          color: "#fff",
          borderRadius: 10,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          padding: "6px 12px 6px 10px",
          gap: 10,
          minWidth: 220,
          maxWidth: 320,
          position: "relative",
        }}
      >
        <img
          src="/afrocinemalogo.png"
          alt="AfroCinema Logo"
          width={28}
          height={28}
          style={{ marginRight: 8, borderRadius: 6, background: "transparent" }}
        />
        <span style={{ flex: 1, fontSize: 14, fontWeight: 400, lineHeight: 1.2 }}>
          Install AfroCinema App
        </span>
        <button
          onClick={() => setShowPrompt(false)}
          aria-label="Close install prompt"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 18,
            fontWeight: 700,
            cursor: "pointer",
            marginLeft: 4,
            lineHeight: 1,
            padding: 0,
          }}
        >
          ×
        </button>
        <button
          onClick={handleInstallClick}
          style={{
            background: "#E87C1E",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "6px 14px",
            fontSize: 13,
            fontWeight: 600,
            marginLeft: 8,
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
          }}
        >
          Install
        </button>
      </div>
    </div>
  );
}
