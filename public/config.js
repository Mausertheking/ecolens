// Public app config. Everything here is meant to be public: the Supabase anon
// key only allows what Row Level Security permits. Secrets (Gemini, Supabase
// service role, Maps) live in Supabase Edge Function secrets, never in this repo.
window.ECOLENS = {
  supabaseUrl: "https://zvpjiwlgysbvhhbfnwpm.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2cGppd2xneXNidmhoYmZud3BtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzMjgzMjgsImV4cCI6MjA5ODkwNDMyOH0.BxuhC2aKC9Q10zuAdQeLSd8HkAMGxXNQ7W2F_TOHRUU",
  // Edge Function that replaced the old Express server.
  apiBase: "https://zvpjiwlgysbvhhbfnwpm.supabase.co/functions/v1/api",
  // Where the web app is hosted (GitHub Pages). The iOS app loads the map page
  // from here so the Maps key's website restriction still applies.
  siteUrl: "https://mausertheking.github.io/ecolens/",
};

// Anonymous visit counting for the website: a random ID kept in this browser
// (no personal data), one count per visitor, page and day. Not used in the app.
window.ecolensVisit = function (page) {
  try {
    if (window.Capacitor?.isNativePlatform?.()) return;
    let vid = localStorage.getItem("ecolens-vid");
    if (!vid) {
      vid = (crypto.randomUUID && crypto.randomUUID()) || String(Date.now()) + Math.random().toString(36).slice(2, 12);
      localStorage.setItem("ecolens-vid", vid);
    }
    fetch(window.ECOLENS.apiBase + "/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vid, page }),
      keepalive: true,
    }).catch(function () {});
  } catch (e) {}
};
