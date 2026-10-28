// ---------- Static UI translations ----------
const I18N = {
  en: {
    tagline: "Snap it. Sort it. Keep Azerbaijan greener.",
    loading: "Loading…",
    nav_map: "Bins",
    nav_history: "History",
    nav_logout: "Log out",
    nav_account: "Account",
    account_title: "Account",
    delete_hint: "Permanently deletes your account and all your scan history.",
    map_title: "Recycling near you",
    map_locating: "Finding your location…",
    map_searching: "Loading recycling points near you…",
    map_found: "{n} recycling points near you. Tap a pin for details.",
    map_found_one: "1 recycling point near you. Tap it for details.",
    map_none: "No recycling points are mapped near you yet.",
    map_bins_failed: "Map loaded, but recycling points are unavailable right now. Please try again in a few minutes.",
    map_denied: "Location access is needed to show recycling near you. Enable it in your browser settings.",
    map_no_geo: "Your device doesn't support location.",
    map_denied_app: "Location is off for EcoLens. Turn it on in Settings → EcoLens → Location.",
    map_no_fix: "Couldn't find your location. Please try again.",
    camera_denied: "Camera access is off for EcoLens. Turn it on in Settings → EcoLens → Camera.",
    camera_unavailable: "No camera is available. Use “Upload image” instead.",
    map_no_key: "The map isn't set up yet. Please try again later.",
    map_error: "Couldn't load the map. Please try again.",
    map_you: "You are here",
    map_bin: "Recycling point",
    auth_signin_title: "Welcome back",
    auth_signin_sub: "Sign in to identify and sort your waste.",
    auth_signin_btn: "Sign in",
    auth_to_signup: "Need an account? Sign up",
    auth_signup_title: "Create your account",
    auth_signup_sub: "Sign up to start sorting your waste.",
    auth_signup_btn: "Sign up",
    auth_to_signin: "Have an account? Sign in",
    auth_check_email: "Check your email to confirm your account, then sign in.",
    auth_not_configured: "Accounts aren't set up yet. Add your Supabase keys and restart.",
    capture_title: "What are you throwing away?",
    capture_sub:
      "Take or upload a photo of any item — EcoLens tells you how to recycle or dispose of it properly here in Azerbaijan.",
    btn_camera: "Take a photo",
    btn_upload: "Upload image",
    btn_analyze: "Identify it",
    btn_retake: "Retake",
    btn_again: "Try again",
    btn_back: "Back",
    analyzing: "Analyzing…",
    scans_left: "{n} of {max} free scans left today",
    limit_reached: "You've used all {max} free scans for today. Come back tomorrow!",
    unlimited: "Unlimited scans ✨",
    history_title: "Your scans",
    no_history: "No scans yet. Identify your first item!",
    delete_account: "Delete my account",
    delete_confirm:
      "This permanently deletes your account and your scan history. It can't be undone. Continue?",
    delete_done: "Your account has been deleted.",
    delete_title: "Delete your account?",
    delete_ok: "Delete",
    cancel: "Cancel",
    ok: "OK",
    delete_failed: "Couldn't delete your account. Please try again.",
    privacy: "Privacy policy",
    label_bin: "Where it goes",
    label_how: "How to prepare it",
    label_tip: "Good to know",
    label_harm: "If it's not recycled",
    recyclable: "Recyclable",
    not_recyclable: "General waste",
    confidence: "Confidence",
    low_conf: "Not fully sure — try a clearer, closer photo for a better match.",
    scan_again: "Scan another item",
    ai_consent_title: "Send this photo to AI?",
    ai_consent_body:
      "To identify the item, EcoLens sends your photo to Google Gemini, an AI service. The photo is used only for this and isn't stored by EcoLens. Continue?",
    ai_consent_ok: "Continue",
    nothing_title: "No item found",
    nothing_hint: "Take a clear photo of the object you want to throw away.",
    try_another: "Try another photo",
    err_generic: "Something went wrong. Please try again.",
    footer: "Powered by Gemini",
    credit: "Created by Maksud Yusuf · Baku, Azerbaijan",
    impact: "Impact",
    help: "Help",
    fb_question: "Was this right?",
    fb_yes: "👍 Yes",
    fb_no: "👎 No",
    fb_what: "What is it actually? (optional)",
    fb_send: "Send",
    fb_thanks: "Thanks! Your answer helps measure how accurate EcoLens is.",
    fb_failed: "Couldn't send feedback. Please try again.",
    my_impact: "Items sorted: {n} · Sent to recycling: {r} · Hazardous handled safely: {h}",
  },
  az: {
    tagline: "Şəkil çək. Ayır. Azərbaycanı təmiz saxla.",
    loading: "Yüklənir…",
    nav_map: "Qutular",
    nav_history: "Tarixçə",
    nav_logout: "Çıxış",
    nav_account: "Hesab",
    account_title: "Hesab",
    delete_hint: "Hesabını və bütün tarama tarixçəni həmişəlik silir.",
    map_title: "Yaxınlıqda təkrar emal",
    map_locating: "Məkanın tapılır…",
    map_searching: "Yaxınlıqdakı təkrar emal məntəqələri yüklənir…",
    map_found: "Yaxınlıqda {n} təkrar emal məntəqəsi. Detallar üçün nişana toxun.",
    map_found_one: "Yaxınlıqda 1 təkrar emal məntəqəsi. Detallar üçün nişana toxun.",
    map_none: "Yaxınlıqda hələ təkrar emal məntəqəsi qeyd olunmayıb.",
    map_bins_failed: "Xəritə yükləndi, amma təkrar emal məntəqələri hazırda əlçatan deyil. Bir neçə dəqiqədən sonra yenidən cəhd et.",
    map_denied: "Yaxınlıqdakı təkrar emalı göstərmək üçün məkan icazəsi lazımdır. Brauzer ayarlarından aç.",
    map_no_geo: "Cihazın məkanı dəstəkləmir.",
    map_denied_app: "EcoLens üçün məkan söndürülüb. Ayarlar → EcoLens → Məkan bölməsindən aç.",
    map_no_fix: "Məkanını tapmaq alınmadı. Zəhmət olmasa yenidən cəhd et.",
    camera_denied: "EcoLens üçün kamera söndürülüb. Ayarlar → EcoLens → Kamera bölməsindən aç.",
    camera_unavailable: "Kamera yoxdur. Əvəzinə “Şəkil yüklə” düyməsindən istifadə et.",
    map_no_key: "Xəritə hələ qurulmayıb. Zəhmət olmasa sonra cəhd et.",
    map_error: "Xəritə yüklənmədi. Zəhmət olmasa yenidən cəhd et.",
    map_you: "Sən buradasan",
    map_bin: "Təkrar emal məntəqəsi",
    auth_signin_title: "Xoş gəldin",
    auth_signin_sub: "Tullantını tanımaq üçün daxil ol.",
    auth_signin_btn: "Daxil ol",
    auth_to_signup: "Hesabın yoxdur? Qeydiyyatdan keç",
    auth_signup_title: "Hesab yarat",
    auth_signup_sub: "Tullantını ayırmağa başlamaq üçün qeydiyyatdan keç.",
    auth_signup_btn: "Qeydiyyat",
    auth_to_signin: "Hesabın var? Daxil ol",
    auth_check_email: "Hesabı təsdiqləmək üçün e-poçtunu yoxla, sonra daxil ol.",
    auth_not_configured: "Hesablar hələ qurulmayıb. Supabase açarlarını əlavə et və yenidən başlat.",
    capture_title: "Nəyi atırsan?",
    capture_sub:
      "İstənilən əşyanın şəklini çək və ya yüklə — EcoLens onu Azərbaycanda necə düzgün təkrar emal edəcəyini və ya atacağını sənə deyir.",
    btn_camera: "Şəkil çək",
    btn_upload: "Şəkil yüklə",
    btn_analyze: "Tanı",
    btn_retake: "Yenidən çək",
    btn_again: "Yenidən cəhd et",
    btn_back: "Geri",
    analyzing: "Analiz edilir…",
    scans_left: "Bu gün {n}/{max} pulsuz tarama qalıb",
    limit_reached: "Bu gün üçün {max} pulsuz taramanın hamısını istifadə etdiniz. Sabah yenidən gəlin!",
    unlimited: "Limitsiz tarama ✨",
    history_title: "Taramaların",
    no_history: "Hələ tarama yoxdur. İlk əşyanı tanı!",
    delete_account: "Hesabımı sil",
    delete_confirm:
      "Bu, hesabını və tarama tarixçəni həmişəlik silir. Geri qaytarmaq mümkün deyil. Davam edilsin?",
    delete_done: "Hesabın silindi.",
    delete_title: "Hesabın silinsin?",
    delete_ok: "Sil",
    cancel: "Ləğv et",
    ok: "Oldu",
    delete_failed: "Hesabı silmək alınmadı. Zəhmət olmasa yenidən cəhd et.",
    privacy: "Məxfilik siyasəti",
    label_bin: "Hara atılır",
    label_how: "Necə hazırlanır",
    label_tip: "Faydalı məlumat",
    label_harm: "Təkrar emal edilməsə",
    recyclable: "Təkrar emal olunur",
    not_recyclable: "Ümumi tullantı",
    confidence: "Əminlik",
    low_conf: "Tam əmin deyil — daha aydın və yaxın şəkil çəkməyə cəhd et.",
    scan_again: "Başqa əşya tara",
    ai_consent_title: "Şəkil Sİ-yə göndərilsin?",
    ai_consent_body:
      "Əşyanı tanımaq üçün EcoLens şəklini Google Gemini süni intellekt xidmətinə göndərir. Şəkil yalnız bunun üçün istifadə olunur və EcoLens tərəfindən saxlanılmır. Davam edilsin?",
    ai_consent_ok: "Davam et",
    nothing_title: "Əşya tapılmadı",
    nothing_hint: "Atmaq istədiyin əşyanın aydın şəklini çək.",
    try_another: "Başqa şəkil sına",
    err_generic: "Xəta baş verdi. Zəhmət olmasa yenidən cəhd et.",
    footer: "Gemini ilə işləyir",
    credit: "Müəllif: Maksud Yusuf · Bakı, Azərbaycan",
    impact: "Təsir",
    help: "Kömək",
    fb_question: "Bu düzgündür?",
    fb_yes: "👍 Bəli",
    fb_no: "👎 Xeyr",
    fb_what: "Əslində nədir? (istəyə bağlı)",
    fb_send: "Göndər",
    fb_thanks: "Təşəkkürlər! Cavabın EcoLens-in nə qədər dəqiq olduğunu ölçməyə kömək edir.",
    fb_failed: "Rəy göndərilmədi. Zəhmət olmasa yenidən cəhd et.",
    my_impact: "Ayrılan əşya: {n} · Təkrar emala: {r} · Təhlükəli, düzgün atılan: {h}",
  },
};

const CATEGORY_META = {
  plastic: { emoji: "🧴", color: "#f0d84a", en: "Plastic", az: "Plastik" },
  paper: { emoji: "📄", color: "#4a9df0", en: "Paper & card", az: "Kağız və karton" },
  glass: { emoji: "🍶", color: "#3fbf9c", en: "Glass", az: "Şüşə" },
  metal: { emoji: "🥫", color: "#9aa6b2", en: "Metal", az: "Metal" },
  organic: { emoji: "🍎", color: "#7bbf3f", en: "Organic", az: "Üzvi tullantı" },
  "e-waste": { emoji: "🔌", color: "#b06bd6", en: "E-waste", az: "Elektron tullantı" },
  hazardous: { emoji: "☣️", color: "#e0774a", en: "Hazardous", az: "Təhlükəli" },
  textile: { emoji: "👕", color: "#d66b9e", en: "Textile", az: "Tekstil" },
  "general-waste": { emoji: "🗑️", color: "#8a9a91", en: "General waste", az: "Ümumi tullantı" },
};

const SCREENS = ["bootCard", "authCard", "startCard", "previewCard", "resultCard", "errorCard", "historyCard", "mapCard", "accountCard"];

let lang = new URLSearchParams(location.search).get("lang") === "az" ? "az" : "en";
let currentImage = null;
let remaining = null;
let limitMax = 3;
let unlimited = false;
let lastResult = null;
let sb = null; // supabase client
let session = null;
let authMode = "signin";

// Public config from config.js. The API is a Supabase Edge Function, so the
// same URLs work on the web (GitHub Pages) and in the iOS app (Capacitor).
const CFG = window.ECOLENS || {};
const api = (p) => CFG.apiBase + p;
// The iOS app bundles its UI locally, so it loads the map page from the live
// site; on the web the map page sits next to index.html.
const IS_NATIVE = !!window.Capacitor?.isNativePlatform?.();
const MAP_URL = new URL("map.html", IS_NATIVE ? CFG.siteUrl : location.href).href;
// Native iOS features (Capacitor plugins): system camera/photo picker, location,
// haptics, launch screen and in-app browser sheet. Empty on the web.
const Native = IS_NATIVE ? window.Capacitor.Plugins : {};
if (IS_NATIVE) {
  document.documentElement.classList.add("native");
  // An app screen doesn't pinch-zoom like a web page.
  document
    .querySelector('meta[name="viewport"]')
    .setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover");
}

const $ = (id) => document.getElementById(id);
const t = (key) => I18N[lang][key] || key;
const fill = (key, vars) =>
  Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, v), t(key));

// ---------- Language ----------
function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll(".lang-toggle button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );
  $("impactLink").href = `impact.html?lang=${lang}`;
  updateAuthLabels();
  updateQuota();
  if (lastResult && !$("resultCard").classList.contains("hidden")) renderResult(lastResult);
}

document.querySelectorAll(".lang-toggle button").forEach((b) =>
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    applyLang();
  })
);

// ---------- Screens ----------
let splashHidden = false;
function show(id) {
  SCREENS.forEach((c) => $(c).classList.toggle("hidden", c !== id));
  // iOS keeps the launch screen up until the first real screen is ready.
  if (IS_NATIVE && !splashHidden) {
    splashHidden = true;
    Native.SplashScreen?.hide({ fadeOutDuration: 250 });
  }
}

// ---------- Boot / auth ----------
async function boot() {
  if (!CFG.supabaseUrl || !CFG.supabaseAnonKey) {
    return showError(t("auth_not_configured"));
  }
  if (!window.supabase) return showError(t("err_generic"));

  sb = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseAnonKey);
  sb.auth.onAuthStateChange((_event, newSession) => {
    session = newSession;
    route();
  });
  const { data } = await sb.auth.getSession();
  session = data.session;
  route();
}

function route() {
  if (session) {
    $("userbar").classList.remove("hidden");
    $("userEmail").textContent = session.user?.email || "";
    show("startCard");
    refreshQuota();
  } else {
    $("userbar").classList.add("hidden");
    show("authCard");
  }
}

function updateAuthLabels() {
  const signin = authMode === "signin";
  $("authTitle").textContent = t(signin ? "auth_signin_title" : "auth_signup_title");
  $("authSub").textContent = t(signin ? "auth_signin_sub" : "auth_signup_sub");
  $("authSubmit").textContent = t(signin ? "auth_signin_btn" : "auth_signup_btn");
  $("authToggle").textContent = t(signin ? "auth_to_signup" : "auth_to_signin");
  $("authPassword").autocomplete = signin ? "current-password" : "new-password";
}

$("authToggle").addEventListener("click", () => {
  authMode = authMode === "signin" ? "signup" : "signin";
  hideAuthError();
  updateAuthLabels();
});

$("authForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  hideAuthError();
  const email = $("authEmail").value.trim();
  const password = $("authPassword").value;
  $("authSubmit").disabled = true;
  try {
    if (authMode === "signup") {
      const { data, error } = await sb.auth.signUp({
        email,
        password,
        // Confirmation links open the live site (also for sign-ups from the iOS app).
        options: { emailRedirectTo: CFG.siteUrl },
      });
      if (error) throw error;
      if (!data.session) showAuthError(t("auth_check_email"), true); // email confirmation on
    } else {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
    }
    // route() runs via onAuthStateChange when a session is created.
  } catch (err) {
    showAuthError(err?.message || t("err_generic"));
  } finally {
    $("authSubmit").disabled = false;
  }
});

$("accountBtn").addEventListener("click", () => {
  $("accountEmail").textContent = session?.user?.email || "";
  show("accountCard");
});
$("accountBack").addEventListener("click", () => show("startCard"));

$("logoutBtn").addEventListener("click", async () => {
  await sb.auth.signOut();
});

function showAuthError(msg, info) {
  const el = $("authError");
  el.textContent = msg;
  el.classList.remove("hidden");
  el.classList.toggle("info", !!info);
}
function hideAuthError() {
  $("authError").classList.add("hidden");
}

// ---------- Token helper ----------
async function accessToken() {
  const { data } = await sb.auth.getSession();
  return data.session?.access_token || "";
}

// ---------- Quota ----------
async function refreshQuota() {
  try {
    const r = await fetch(api("/usage"), {
      headers: { Authorization: `Bearer ${await accessToken()}` },
    });
    if (r.ok) {
      const d = await r.json();
      limitMax = d.limit ?? limitMax;
      unlimited = !!d.unlimited;
      remaining = d.remaining;
      updateQuota();
    }
  } catch {}
}

function updateQuota() {
  const el = $("quota");
  if (!el) return;
  if (unlimited) {
    el.textContent = t("unlimited");
    el.classList.remove("quota-empty");
    $("cameraBtn").disabled = false;
    $("uploadBtn").disabled = false;
    return;
  }
  if (remaining === null) {
    el.textContent = "";
    return;
  }
  const empty = remaining <= 0;
  el.textContent = empty
    ? fill("limit_reached", { max: limitMax })
    : fill("scans_left", { n: remaining, max: limitMax });
  el.classList.toggle("quota-empty", empty);
  $("cameraBtn").disabled = empty;
  $("uploadBtn").disabled = empty;
}

// ---------- Image capture + resize ----------
$("cameraBtn").addEventListener("click", () => (IS_NATIVE ? nativePhoto("CAMERA") : $("cameraInput").click()));
$("uploadBtn").addEventListener("click", () => (IS_NATIVE ? nativePhoto("PHOTOS") : $("fileInput").click()));
$("cameraInput").addEventListener("change", (e) => handleFile(e.target.files[0]));
$("fileInput").addEventListener("change", (e) => handleFile(e.target.files[0]));

async function handleFile(file) {
  if (!file) return;
  try {
    showPreview(await resizeImage(file, 1024));
  } catch {
    showError(t("err_generic"));
  }
}

// iOS: the system camera or photo picker, returning a JPEG already sized for
// the API (longest edge 1024px, like resizeImage on the web).
async function nativePhoto(source) {
  let photo;
  try {
    photo = await Native.Camera.getPhoto({
      source,
      resultType: "dataUrl",
      quality: 85,
      width: 1024,
      height: 1024,
      correctOrientation: true,
    });
  } catch (e) {
    const msg = e?.message || "";
    if (/cancel/i.test(msg)) return; // closed the picker
    if (/denied|access|permission/i.test(msg)) return showError(t("camera_denied"));
    if (/not available|no camera|unavailable/i.test(msg)) return showError(t("camera_unavailable"));
    return showError(t("err_generic"));
  }
  showPreview(photo.dataUrl);
}

function showPreview(dataUrl) {
  currentImage = dataUrl;
  $("previewImg").src = currentImage;
  $("scanOverlay").classList.add("hidden");
  setAnalyzing(false);
  show("previewCard");
}

function resizeImage(file, maxEdge) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;
      const scale = Math.min(1, maxEdge / Math.max(width, height));
      width = Math.round(width * scale);
      height = Math.round(height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("bad image"));
    };
    img.src = url;
  });
}

// ---------- Analyze ----------
$("analyzeBtn").addEventListener("click", analyze);
$("retakeBtn").addEventListener("click", () => show("startCard"));
$("errorRetry").addEventListener("click", () => (session ? show("startCard") : show("authCard")));

function setAnalyzing(on) {
  $("analyzeBtn").disabled = on;
  $("retakeBtn").disabled = on;
  $("scanOverlay").classList.toggle("hidden", !on);
}

async function analyze() {
  if (!currentImage) return;
  if (!(await aiConsent())) return;
  setAnalyzing(true);
  try {
    const res = await fetch(api("/identify"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await accessToken()}`,
      },
      body: JSON.stringify({ image: currentImage }),
    });
    const data = await res.json();
    if (!res.ok) {
      if (res.status === 401 && data.code === "auth_required") {
        await sb.auth.signOut();
        return;
      }
      if (res.status === 429 && data.code === "daily_limit") {
        limitMax = data.limit ?? limitMax;
        remaining = 0;
        updateQuota();
        showError(fill("limit_reached", { max: limitMax }));
        return;
      }
      showError(data.error || t("err_generic"));
      return;
    }
    unlimited = !!data.unlimited;
    if (unlimited || typeof data.remaining === "number") {
      remaining = data.remaining;
      limitMax = data.limit ?? limitMax;
      updateQuota();
    }
    lastResult = data;
    renderResult(data);
    show("resultCard");
    Native.Haptics?.notification({ type: data.identified === false ? "WARNING" : "SUCCESS" });
  } catch {
    showError(t("err_generic"));
  } finally {
    setAnalyzing(false);
  }
}

// The photo goes to a third-party AI (Google Gemini). Apple's guideline 5.1.2(i)
// requires telling people and getting their permission first; asked once.
const AI_CONSENT_KEY = "ecolens-ai-consent";
async function aiConsent() {
  try {
    if (localStorage.getItem(AI_CONSENT_KEY) === "yes") return true;
  } catch {}
  const ok = await confirmBox(t("ai_consent_title"), t("ai_consent_body"), t("ai_consent_ok"));
  if (ok) {
    try {
      localStorage.setItem(AI_CONSENT_KEY, "yes");
    } catch {}
  }
  return ok;
}

// ---------- History ----------
$("historyBtn").addEventListener("click", openHistory);
$("historyBack").addEventListener("click", () => show("startCard"));

async function openHistory() {
  show("historyCard");
  const listEl = $("historyList");
  listEl.innerHTML = `<p class="muted">${t("loading")}</p>`;
  const { data, error } = await sb
    .from("scans")
    .select("item_en,item_az,category,recyclable,confidence,created_at")
    .eq("identified", true)
    .order("created_at", { ascending: false })
    .limit(30);
  if (error || !data || data.length === 0) {
    listEl.innerHTML = `<p class="muted">${t("no_history")}</p>`;
    return;
  }
  renderMyImpact();
  listEl.innerHTML = data
    .map((s) => {
      const meta = CATEGORY_META[s.category] || CATEGORY_META["general-waste"];
      const name = esc((lang === "az" ? s.item_az : s.item_en) || "");
      const catName = lang === "az" ? meta.az : meta.en;
      const when = shortDate(new Date(s.created_at));
      return `<div class="history-item">
        <span class="history-emoji">${meta.emoji}</span>
        <div class="history-body">
          <div class="history-name">${name}</div>
          <div class="history-meta">${esc(catName)} · ${esc(when)}</div>
        </div>
        <span class="history-badge ${s.recyclable ? "yes" : "no"}">${s.recyclable ? "♻️" : "🗑️"}</span>
      </div>`;
    })
    .join("");
}

// Personal totals across all of the user's scans (not just the 30 listed).
async function renderMyImpact() {
  const el = $("myImpact");
  el.classList.add("hidden");
  const count = async (filter) => {
    let q = sb.from("scans").select("id", { count: "exact", head: true }).eq("identified", true);
    if (filter) q = filter(q);
    const { count: n, error } = await q;
    if (error) throw error;
    return n || 0;
  };
  try {
    const [n, r, h] = await Promise.all([
      count(),
      count((q) => q.eq("recyclable", true)),
      count((q) => q.in("category", ["hazardous", "e-waste"])),
    ]);
    if (!n) return;
    el.textContent = fill("my_impact", { n, r, h });
    el.classList.remove("hidden");
  } catch {}
}

// ---------- Dialogs ----------
// Native iOS alerts with buttons in the app's language; browser dialogs on the web.
async function confirmBox(title, message, okTitle) {
  if (!IS_NATIVE) return confirm(message);
  const { value } = await Native.Dialog.confirm({
    title,
    message,
    okButtonTitle: okTitle,
    cancelButtonTitle: t("cancel"),
  });
  return value;
}
async function alertBox(message) {
  if (!IS_NATIVE) return alert(message);
  await Native.Dialog.alert({ title: "EcoLens", message, buttonTitle: t("ok") });
}

// ---------- Delete account (App Store requirement) ----------
$("deleteAccountBtn").addEventListener("click", async () => {
  if (!(await confirmBox(t("delete_title"), t("delete_confirm"), t("delete_ok")))) return;
  try {
    const r = await fetch(api("/account"), {
      method: "DELETE",
      headers: { Authorization: `Bearer ${await accessToken()}` },
    });
    if (!r.ok) throw new Error("delete failed");
    await sb.auth.signOut();
    await alertBox(t("delete_done"));
  } catch {
    await alertBox(t("delete_failed"));
  }
});

// ---------- Nearby bins map ----------
// The map is its own page (map.html), embedded in an iframe. It fetches the Maps
// key from the API at runtime, so the key isn't in the repo or the app bundle.
$("mapBtn").addEventListener("click", openMap);
$("mapBack").addEventListener("click", () => show("startCard"));

window.addEventListener("message", (e) => {
  if (e.origin !== new URL(MAP_URL).origin) return;
  const d = e.data;
  if (!d || d.type !== "ecolens-map") return;
  const status = $("mapStatus");
  if (d.status === "found") status.textContent = d.count === 1 ? t("map_found_one") : fill("map_found", { n: d.count });
  else if (d.status === "none") status.textContent = t("map_none");
  else if (d.status === "binsfail") status.textContent = t("map_bins_failed");
  else if (d.status === "nokey") status.textContent = t("map_no_key");
  else status.textContent = t("map_error");
});

async function openMap() {
  show("mapCard");
  const status = $("mapStatus");
  status.textContent = t("map_locating");
  let coords;
  try {
    coords = await getLocation();
  } catch (e) {
    status.textContent = t(e.code === "denied" ? (IS_NATIVE ? "map_denied_app" : "map_denied") : e.code === "nogeo" ? "map_no_geo" : "map_no_fix");
    return;
  }
  status.textContent = t("map_searching");
  $("mapFrame").src = `${MAP_URL}?lat=${coords.latitude}&lon=${coords.longitude}&lang=${lang}`;
}

// The device's location. On iOS this uses the native permission prompt
// (Capacitor Geolocation); on the web, the browser's. Rejects with
// { code: "denied" | "nogeo" | "nofix" }.
async function getLocation() {
  const opts = { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 };
  if (IS_NATIVE) {
    try {
      let perm = await Native.Geolocation.checkPermissions();
      if (perm.location === "prompt" || perm.location === "prompt-with-rationale") {
        perm = await Native.Geolocation.requestPermissions({ permissions: ["location"] });
      }
      if (perm.location === "denied") throw { code: "denied" };
      return (await Native.Geolocation.getCurrentPosition(opts)).coords;
    } catch (e) {
      if (e?.code === "denied" || /denied|disabled/i.test(e?.message || "")) throw { code: "denied" };
      throw { code: "nofix" };
    }
  }
  if (!navigator.geolocation) throw { code: "nogeo" };
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(pos.coords),
      (err) => reject({ code: err.code === err.PERMISSION_DENIED ? "denied" : "nofix" }),
      opts
    )
  );
}

// ---------- Footer pages (Impact, Help, Privacy) ----------
// In the iOS app these open in the system's in-app browser sheet (with its own
// Done button) instead of replacing the app screen.
document.querySelector(".footer").addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a || !IS_NATIVE) return;
  e.preventDefault();
  const url = new URL(a.getAttribute("href"), CFG.siteUrl);
  url.searchParams.set("app", "1"); // the page hides its links back to the website
  Native.Browser.open({ url: url.href, presentationStyle: "popover" });
});

// ---------- Render result ----------
function pick(obj, base) {
  return obj[`${base}_${lang}`] ?? obj[`${base}_en`] ?? "";
}

function renderResult(d) {
  // Nothing recognisable (blurry photo, a person, a pet…): no bin advice.
  if (d.identified === false) {
    $("resultCard").innerHTML = `
      <div class="nothing-found">
        <div class="capture-illustration" aria-hidden="true">🔍</div>
        <h2>${esc(pick(d, "item_name") || t("nothing_title"))}</h2>
        <p class="muted">${esc(pick(d, "instructions") || t("nothing_hint"))}</p>
      </div>
      <div class="result-footer">
        <button class="btn primary" id="againBtn">${t("try_another")}</button>
      </div>`;
    $("againBtn").addEventListener("click", () => show("startCard"));
    return;
  }
  const meta = CATEGORY_META[d.category] || CATEGORY_META["general-waste"];
  const catName = lang === "az" ? meta.az : meta.en;
  const recyclable = !!d.recyclable;
  const conf = Math.round((Number(d.confidence) || 0) * 100);
  const lowConf = d.identified === false || conf < 45;

  $("resultCard").innerHTML = `
    <div class="result-head">
      <div class="result-title">
        <h2>${esc(pick(d, "item_name"))}</h2>
        <div class="result-material">${esc(pick(d, "material"))}</div>
      </div>
      <span class="badge ${recyclable ? "recyclable" : "not"}">
        ${recyclable ? "♻️ " + t("recyclable") : "🗑️ " + t("not_recyclable")}
      </span>
    </div>

    <div class="cat-strip" style="background:${hexToSoft(meta.color)};color:${darken(meta.color)}">
      <span class="cat-emoji">${meta.emoji}</span>
      <span>${esc(catName)}</span>
    </div>

    <div class="rows">
      <div class="row">
        <div class="row-icon">📍</div>
        <div class="row-body"><h3>${t("label_bin")}</h3><p>${esc(pick(d, "bin"))}</p></div>
      </div>
      <div class="row">
        <div class="row-icon">🧼</div>
        <div class="row-body"><h3>${t("label_how")}</h3><p>${esc(pick(d, "instructions"))}</p></div>
      </div>
      <div class="row tip">
        <div class="row-icon">💡</div>
        <div class="row-body"><h3>${t("label_tip")}</h3><p>${esc(pick(d, "tip"))}</p></div>
      </div>
      <div class="row harm">
        <div class="row-icon">⚠️</div>
        <div class="row-body"><h3>${t("label_harm")}</h3><p>${esc(pick(d, "harm"))}</p></div>
      </div>
    </div>

    <div class="az-note">
      <span class="flag">🇦🇿</span>
      <span>${esc(pick(d, "azerbaijan_note"))}</span>
    </div>

    <div class="confidence">
      <span>${t("confidence")}</span>
      <span class="bar"><span style="width:${conf}%"></span></span>
      <span>${conf}%</span>
    </div>

    ${lowConf ? `<div class="low-conf">${t("low_conf")}</div>` : ""}

    ${d.scan_id ? `<div class="feedback" id="feedbackBox">${feedbackHtml(d)}</div>` : ""}

    <div class="result-footer">
      <button class="btn primary" id="againBtn">${t("scan_again")}</button>
    </div>
  `;

  $("againBtn").addEventListener("click", () => show("startCard"));
  if (d.scan_id) wireFeedback(d);
}

// ---------- "Was this right?" feedback ----------
// Users' verdicts give EcoLens a measured, real-world accuracy (Impact page).
// State lives on the result object so a language switch re-renders it as-is.
function feedbackHtml(d) {
  if (d.fbState === "sent") return `<p class="fb-thanks">${t("fb_thanks")}</p>`;
  if (d.fbState === "no") {
    return `<form class="fb-form" id="fbForm">
        <input class="field" id="fbCorrection" maxlength="120" placeholder="${esc(t("fb_what"))}" />
        <button class="btn ghost" type="submit" id="fbSend">${t("fb_send")}</button>
      </form>
      ${d.fbError ? `<p class="fb-error">${t("fb_failed")}</p>` : ""}`;
  }
  return `<span class="fb-q">${t("fb_question")}</span>
    <div class="fb-actions">
      <button class="fb-btn" data-fb="yes">${t("fb_yes")}</button>
      <button class="fb-btn" data-fb="no">${t("fb_no")}</button>
    </div>
    ${d.fbError ? `<p class="fb-error">${t("fb_failed")}</p>` : ""}`;
}

function wireFeedback(d) {
  const box = $("feedbackBox");
  const rerender = () => {
    box.innerHTML = feedbackHtml(d);
    wireFeedback(d);
  };
  box.querySelectorAll(".fb-btn").forEach((b) =>
    b.addEventListener("click", async () => {
      d.fbError = false;
      if (b.dataset.fb === "no") {
        d.fbState = "no";
        rerender();
        $("fbCorrection").focus();
        return;
      }
      await sendFeedback(d, true, "", rerender);
    })
  );
  const form = $("fbForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      sendFeedback(d, false, $("fbCorrection").value, rerender);
    });
  }
}

async function sendFeedback(d, correct, correction, rerender) {
  try {
    const r = await fetch(api("/feedback"), {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${await accessToken()}` },
      body: JSON.stringify({ scan_id: d.scan_id, correct, correction }),
    });
    if (!r.ok) throw new Error("feedback failed");
    d.fbState = "sent";
    d.fbError = false;
  } catch {
    d.fbError = true;
  }
  rerender();
}

function showError(msg) {
  $("errorText").textContent = msg;
  show("errorCard");
}

// ---------- Helpers ----------
// Many browsers ship no Azerbaijani date names ("M07"), so spell them out.
const AZ_MONTHS = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avq", "sen", "okt", "noy", "dek"];
function shortDate(d) {
  if (lang === "az") return `${d.getDate()} ${AZ_MONTHS[d.getMonth()]}`;
  return d.toLocaleDateString("en", { month: "short", day: "numeric" });
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}
function hexToSoft(hex) {
  const { r, g, b } = hexRgb(hex);
  return `rgba(${r},${g},${b},0.16)`;
}
function darken(hex) {
  const { r, g, b } = hexRgb(hex);
  return `rgb(${Math.round(r * 0.55)},${Math.round(g * 0.55)},${Math.round(b * 0.55)})`;
}
function hexRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

applyLang();
boot();
