/* AudioMeter — site : langues, liens, animations */
(function () {
  "use strict";
  var S = window.SITE;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------------------------------------------------------------- langues
  var EN = {
    "nav.features": "Features", "nav.hotbar": "Hotbar", "nav.themes": "Themes", "nav.price": "Pricing", "nav.faq": "FAQ", "nav.buy": "Buy",
    "hero.title": "Your meters, always <span class=\"grad\">on top of your DAW.</span>",
    "hero.lead": "Spectrum, LUFS, true peak, stereo, oscilloscope and spectrogram in one plugin, plus a thin bar that stays at the top of your screen while you mix.",
    "hero.buy": "Buy", "hero.trial": "Free 14-day trial",
    "fact.1": "Windows 10 / 11", "fact.2": "64-bit VST3", "fact.3": "2 computers per licence", "fact.4": "Works offline",
    "hotbar.title": "A bar that never hides behind your windows.",
    "hotbar.lead": "Click HOTBAR and the meters dock to the top of your screen, full width, like the taskbar. Your DAW stops just below it: nothing hidden, nothing covering it.",
    "hotbar.l1": "<b>Always visible</b>, even when you switch apps.",
    "hotbar.l2": "<b>Never covers your DAW</b>: windows fit underneath.",
    "hotbar.l3": "<b>You choose what it shows</b>: meters, spectrum, spectrogram, oscilloscope, goniometer, LUFS.",
    "hotbar.label": "Your DAW stays right below",
    "features.title": "Everything you need to check a mix.",
    "features.lead": "Six precise, readable metering tools in a single window.",
    "f1.t": "Spectrum analyzer", "f1.d": "FFT up to 16384 points, L / R / Mid / Side sources, A-weighting, peak hold, log, linear or ERB scale, line or bars.",
    "f2.t": "Loudness & true peak", "f2.d": "Momentary, short-term and integrated LUFS (ITU-R BS.1770), 4x oversampled true peak, PLR, streaming, club, podcast and broadcast targets.",
    "f3.t": "Waveform", "f3.d": "Scrolling history coloured by frequency band (lows, mids, highs), L, R, Mid or Side lanes, clipping in red.",
    "f4.t": "Stable oscilloscope", "f4.d": "The trigger follows the pitch: the waveform stands still, with its frequency and note displayed.",
    "f5.t": "Sharp spectrogram", "f5.d": "Sharp mode with frequency reassignment, piano keyboard, frequency zoom, crosshair with note and time.",
    "f6.t": "Stereo & correlation", "f6.d": "Lissajous or per-band dot cloud goniometer, 1 or 3-band correlation, width, balance.",
    "settings.title": "Everything is a right-click away.",
    "settings.d": "Every module has its own menu: FFT size, window, sources, scales, colours. Settings are remembered and shared by every instance, 30 to 120 fps, pause with the P key.",
    "stat.1": "metering tools", "stat.2": "FFT points maximum", "stat.3": "frames per second", "stat.4": "change to your sound",
    "themes.title": "Seven sober themes, six languages.",
    "themes.lead": "Neutral backgrounds and a single accent colour, easy on the eyes during long sessions.",
    "price.title": "One price, no subscription.", "price.lead": "Pay once, keep it forever.", "price.once": "one-time payment",
    "price.l1": "VST3 plugin for Windows 10 / 11 (64-bit)", "price.l2": "Activate on 2 computers, transferable",
    "price.l3": "Works offline after activation", "price.l4": "All version 1 updates included",
    "price.l5": "Licence key e-mailed instantly", "price.buy": "Buy the licence", "price.trial": "or download the free 14-day trial",
    "price.vat": "Secure payment by Polar. VAT included depending on your country, invoice sent by e-mail.",
    "faq.title": "Frequently asked questions",
    "q1": "How does activation work?", "a1": "After your purchase you receive a licence key by e-mail. Open AudioMeter in your DAW: the licence window appears (otherwise click the TRIAL button next to the logo), paste the key and click ACTIVATE. An internet connection is needed only once.",
    "q2": "On how many computers?", "a2": "Two computers at the same time. To switch computers, click the AUDIOMETER logo in the plugin, then \"Deactivate this computer\": the slot is freed and you can activate the key elsewhere.",
    "q3": "Do I need to be online?", "a3": "Only to activate. Afterwards the plugin checks the licence now and then when internet is available, and keeps working offline for several weeks.",
    "q4": "Which DAWs?", "a4": "Any VST3 host on Windows: FL Studio, Ableton Live, Reaper, Cubase, Studio One, Bitwig… Put it on a track or on the master.",
    "q5": "What about Mac?", "a5": "Not yet: the current version is for Windows. Try the free trial before buying to make sure it suits you.",
    "q6": "Does the plugin change the sound?", "a6": "No. AudioMeter measures the signal and lets it through untouched.",
    "q7": "Refunds?", "a7": "Use the free 14-day trial to test everything before buying. If you have a technical problem, write to us at the address below.",
    "q8": "Windows says \"Windows protected your PC\"", "a8": "This is normal for a small independent developer: the installer does not have a paid signature yet. Click \"More info\" then \"Run anyway\". The installer simply puts the plugin in the Windows VST3 folder.",
    "final.title": "Stop guessing. <span class=\"grad\">Look.</span>",
    "final.lead": "Try AudioMeter free for 14 days, no credit card needed.",
    "final.trial": "Download the free trial", "final.buy": "Buy",
    "foot.legal": "Legal notice", "foot.terms": "Terms of sale", "foot.privacy": "Privacy"
  };

  var FR = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) { FR[el.dataset.i18n] = el.textContent; });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) { FR[el.dataset.i18nHtml] = el.innerHTML; });

  function setLang (lang) {
    var dict = lang === "en" ? EN : FR;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { if (dict[el.dataset.i18n]) el.textContent = dict[el.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { if (dict[el.dataset.i18nHtml]) el.innerHTML = dict[el.dataset.i18nHtml]; });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false"); });
    try { localStorage.setItem("am-lang", lang); } catch (e) {}
  }
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });
  var saved = null;
  try { saved = localStorage.getItem("am-lang"); } catch (e) {}
  var fromUrl = new URLSearchParams(location.search).get("lang");
  var browser = (navigator.language || "fr").slice(0, 2) === "fr" ? "fr" : "en";
  setLang(fromUrl || saved || browser);

  // ---------------------------------------------------------------- liens et prix
  document.querySelectorAll(".js-price").forEach(function (el) { el.textContent = S.price; });
  document.querySelectorAll(".js-buy").forEach(function (el) { el.href = S.buyUrl; });
  document.querySelectorAll(".js-download").forEach(function (el) { el.href = S.downloadUrl; });
  document.querySelectorAll(".js-contact").forEach(function (el) { el.href = "mailto:" + S.contact; });
  document.querySelectorAll(".js-year").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // ---------------------------------------------------------------- barre de navigation
  var nav = document.querySelector("header.nav");
  function onScrollNav () { nav.classList.toggle("scrolled", window.scrollY > 10); }
  window.addEventListener("scroll", onScrollNav, { passive: true }); onScrollNav();

  // ---------------------------------------------------------------- apparitions au défilement
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal, .desk").forEach(function (el) { if (reduce) el.classList.add("in"); else io.observe(el); });

  // ---------------------------------------------------------------- plugin qui se redresse au défilement
  var device = document.getElementById("device");
  if (device && !reduce) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var r = device.getBoundingClientRect();
      var vh = window.innerHeight;
      var p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.75)));   // 0 : en bas de l'écran, 1 : bien visible
      var e = 1 - Math.pow(1 - p, 3);
      device.style.setProperty("--tilt", (22 * (1 - e)).toFixed(2) + "deg");
      device.style.setProperty("--scale", (0.9 + 0.1 * e).toFixed(4));
    };
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  // ---------------------------------------------------------------- halo des cartes qui suit la souris
  document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  // ---------------------------------------------------------------- compteurs
  var fmt = function (n) { return n >= 1000 ? n.toLocaleString("fr-FR").replace(/ | /g, " ") : String(n); };
  var countIo = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      countIo.unobserve(e.target);
      var el = e.target, target = +el.dataset.count, t0 = null, dur = 1600;
      if (reduce || target === 0) { el.textContent = fmt(target); return; }
      var step = function (ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur), k = 1 - Math.pow(1 - p, 4);
        el.textContent = fmt(Math.round(target * k));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(function (el) { el.textContent = "0"; countIo.observe(el); });

  // ---------------------------------------------------------------- sélecteur de thèmes
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tabs button"));
  var shots = document.querySelectorAll(".theme-stack img");
  var current = 0, auto = null;
  function showTheme (i) {
    current = (i + tabs.length) % tabs.length;
    var name = tabs[current].dataset.theme;
    tabs.forEach(function (b, j) { b.setAttribute("aria-selected", j === current ? "true" : "false"); });
    shots.forEach(function (img) { img.classList.toggle("on", img.dataset.theme === name); });
  }
  tabs.forEach(function (b, i) { b.addEventListener("click", function () { clearInterval(auto); auto = null; showTheme(i); }); });
  var stack = document.querySelector(".theme-stack");
  if (stack && !reduce) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && auto === null && current === 0) auto = setInterval(function () { showTheme(current + 1); }, 2600);
        if (!e.isIntersecting && auto) { clearInterval(auto); auto = null; }
      });
    }, { threshold: 0.4 }).observe(stack);
  }

  // ---------------------------------------------------------------- FAQ qui s'ouvre en douceur
  document.querySelectorAll("details").forEach(function (d) {
    var summary = d.querySelector("summary"), answer = d.querySelector(".answer");
    if (!answer || reduce) return;
    summary.addEventListener("click", function (ev) {
      ev.preventDefault();
      if (d.open) {
        var h = answer.scrollHeight;
        answer.animate([{ height: h + "px", opacity: 1 }, { height: "0px", opacity: 0 }], { duration: 380, easing: "cubic-bezier(.22,1,.36,1)" })
              .onfinish = function () { d.open = false; };
      } else {
        d.open = true;
        var h2 = answer.scrollHeight;
        answer.animate([{ height: "0px", opacity: 0 }, { height: h2 + "px", opacity: 1 }], { duration: 460, easing: "cubic-bezier(.22,1,.36,1)" });
      }
    });
  });

  // ---------------------------------------------------------------- vidéos : lecture seulement quand elles sont visibles
  var vio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { if (v.preload === "none") v.preload = "auto"; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
      else v.pause();
    });
  }, { threshold: 0.1 });
  document.querySelectorAll("video").forEach(function (v) { if (reduce) { v.removeAttribute("autoplay"); v.pause(); } else vio.observe(v); });

  // ---------------------------------------------------------------- fond animé de l'accroche (courbes de spectre)
  var cv = document.getElementById("hero-canvas");
  if (cv && cv.getContext) {
    var ctx = cv.getContext("2d"), W = 0, H = 0, dpr = 1, mouseX = 0.5, visible = true, t = 0;
    var resize = function () {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize(); window.addEventListener("resize", resize);
    cv.parentElement.addEventListener("pointermove", function (e) { mouseX = e.clientX / window.innerWidth; });
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(cv);

    var curve = function (u, ph, amp) {
      var g = function (c, w) { return Math.exp(-Math.pow((u - c) / w, 2)); };
      var peak = g(0.16 + 0.03 * Math.sin(ph * 0.4) + (mouseX - 0.5) * 0.04, 0.08) * 0.75;
      var p2 = g(0.37, 0.012) * 0.45 + g(0.42, 0.012) * 0.5;
      var tilt = 0.12 + 0.24 * Math.max(0, u - 0.46);
      var wob = 0.035 * Math.sin(u * 48 + ph * 1.9) * Math.sin(u * 13 - ph * 1.1) * (0.3 + u);
      return (peak + p2 + tilt + wob) * amp;
    };
    var frame = function () {
      if (visible) {
        t += reduce ? 0 : 0.012;
        ctx.clearRect(0, 0, W, H);
        // grille façon analyseur (fréquences log)
        ctx.strokeStyle = "rgba(255,255,255,0.035)"; ctx.lineWidth = 1;
        [20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000].forEach(function (f) {
          var x = Math.log(f / 20) / Math.log(1000) * W;
          ctx.beginPath(); ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, H); ctx.stroke();
        });
        for (var y = H * 0.2; y < H; y += H * 0.12) { ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(W, y + 0.5); ctx.stroke(); }
        // trois courbes superposées, décalées dans le temps
        var base = H * 0.99, amp = Math.min(H * 0.3, 250);
        [[0.14, 1.0, 0], [0.28, 0.82, 1.7], [0.7, 0.92, 3.1]].forEach(function (c, i) {
          var ph = t + c[2];
          ctx.beginPath();
          for (var k = 0; k <= 160; k++) {
            var u = k / 160, x = u * W, yy = base - curve(u, ph, amp * c[1]);
            if (k === 0) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
          }
          if (i === 2) {
            ctx.shadowColor = "rgba(143,179,198,0.6)"; ctx.shadowBlur = 18;
            ctx.strokeStyle = "rgba(188,214,227," + c[0] + ")"; ctx.lineWidth = 2;
          } else { ctx.shadowBlur = 0; ctx.strokeStyle = "rgba(143,179,198," + c[0] + ")"; ctx.lineWidth = 1.2; }
          ctx.stroke();
          if (i === 2) {
            ctx.shadowBlur = 0;
            ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
            var grd = ctx.createLinearGradient(0, base - amp, 0, H);
            grd.addColorStop(0, "rgba(143,179,198,0.10)"); grd.addColorStop(1, "rgba(143,179,198,0)");
            ctx.fillStyle = grd; ctx.fill();
          }
        });
        // fondu en bas et sur les côtés
        var fade = ctx.createLinearGradient(0, H * 0.82, 0, H);
        fade.addColorStop(0, "rgba(10,12,15,0)"); fade.addColorStop(1, "rgba(10,12,15,1)");
        ctx.fillStyle = fade; ctx.fillRect(0, H * 0.82, W, H * 0.18);
      }
      if (!reduce) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }
})();
