const BROKERS = {
  // S-Money
  AN: { name: "Wanteg Sekuritas", type: "S-Money" },
  AO: { name: "ERDIKHA ELIT SEKURITAS", type: "S-Money" },
  AR: { name: "Binaartha Sekuritas", type: "S-Money" },
  AT: { name: "Phintraco Sekuritas", type: "S-Money" },
  BR: { name: "Trust Sekuritas", type: "S-Money" },
  CD: { name: "Mega Capital Sekuritas", type: "S-Money" },
  DD: { name: "Makindo Sekuritas", type: "S-Money" },
  DH: { name: "SINARMAS SEKURITAS", type: "S-Money" },
  DU: { name: "KAF Sekuritas Indonesia", type: "S-Money" },
  DX: { name: "Bahana Sekuritas", type: "S-Money" },
  EL: { name: "Evergreen Sekuritas Indonesia", type: "S-Money" },
  FO: { name: "Forte Global Sekuritas", type: "S-Money" },
  FZ: { name: "Waterfront Sekuritas Indonesia", type: "S-Money" },
  GA: { name: "BNC Sekuritas Indonesia", type: "S-Money" },
  GI: { name: "Webull Sekuritas Indonesia", type: "S-Money" },
  GR: { name: "PANIN SEKURITAS Tbk.", type: "S-Money" },
  HP: { name: "Henan Putihrai Sekuritas", type: "S-Money" },
  IC: { name: "Integrity Capital Sekuritas", type: "S-Money" },
  ID: { name: "Anugerah Sekuritas Indonesia", type: "S-Money" },
  IN: { name: "INVESTINDO NUSANTARA SEKURITA", type: "S-Money" },
  IT: { name: "INTI TELADAN SEKURITAS", type: "S-Money" },
  IU: { name: "Indo Capital Sekuritas", type: "S-Money" },
  KI: { name: "Ciptadana Sekuritas Asia", type: "S-Money" },
  KK: { name: "Phillip Sekuritas Indonesia", type: "S-Money" },
  LG: { name: "Trimegah Sekuritas Indonesia Tbk.", type: "S-Money" },
  MU: { name: "Minna Padi Investama Sekuritas", type: "S-Money" },
  NI: { name: "BNI Sekuritas", type: "S-Money" },
  OD: { name: "BRI Danareksa Sekuritas", type: "S-Money" },
  PC: { name: "FAC Sekuritas Indonesia", type: "S-Money" },
  PO: { name: "Pilarmas Investindo Sekuritas", type: "S-Money" },
  PP: { name: "Aldiracita Sekuritas Indonesia", type: "S-Money" },
  PS: { name: "PARAMITRA ALFA SEKURITAS", type: "S-Money" },
  QA: { name: "Tuntun Sekuritas Indonesia", type: "S-Money" },
  RF: { name: "Buana Capital Sekuritas", type: "S-Money" },
  RG: { name: "Profindo Sekuritas Indonesia", type: "S-Money" },
  RO: { name: "Pluang Maju Sekuritas", type: "S-Money" },
  RS: { name: "Yulie Sekuritas Indonesia Tbk.", type: "S-Money" },
  SA: { name: "Elit Sukses Sekuritas", type: "S-Money" },
  SF: { name: "Surya Fajar Sekuritas", type: "S-Money" },
  SH: { name: "Artha Sekuritas Indonesia", type: "S-Money" },
  SQ: { name: "BCA Sekuritas", type: "S-Money" },
  SS: { name: "Supra Sekuritas Indonesia", type: "S-Money" },
  TS: { name: "Dwidana Sakti Sekuritas", type: "S-Money" },
  XA: { name: "NH Korindo Sekuritas Indonesia", type: "S-Money" },
  ZR: { name: "Bumiputera Sekuritas", type: "S-Money" },

  // Whale
  AG: { name: "Kiwoom Sekuritas Indonesia", type: "Whale" },
  AH: { name: "Shinhan Sekuritas Indonesia", type: "Whale" },
  AI: { name: "UOB Kay Hian Sekuritas", type: "Whale" },
  AK: { name: "UBS Sekuritas Indonesia", type: "Whale" },
  BK: { name: "J.P. Morgan Sekuritas Indonesia", type: "Whale" },
  BQ: { name: "Korea Investment and Sekuritas Indonesia", type: "Whale" },
  DP: { name: "DBS Vickers Sekuritas Indonesia", type: "Whale" },
  FS: { name: "Yuanta Sekuritas Indonesia", type: "Whale" },
  GW: { name: "HSBC Sekuritas Indonesia", type: "Whale" },
  HD: { name: "KGI Sekuritas Indonesia", type: "Whale" },
  MI: { name: "Victoria Sekuritas Indonesia", type: "Whale" },
  RX: { name: "Macquarie Sekuritas Indonesia", type: "Whale" },
  TP: { name: "OCBC Sekuritas Indonesia", type: "Whale" },
  YU: { name: "CGS International Sekuritas Indonesia", type: "Whale" },
  ZP: { name: "Maybank Sekuritas Indonesia", type: "Whale" },

  // Retail
  AD: { name: "OSO Sekuritas Indonesia", type: "Retail" },
  AF: { name: "Harita Kencana Sekuritas", type: "Retail" },
  AP: { name: "Pacific Sekuritas Indonesia", type: "Retail" },
  AZ: { name: "Sucor Sekuritas", type: "Retail" },
  BF: { name: "Inti Fikasa Sekuritas", type: "Retail" },
  DR: { name: "RHB Sekuritas Indonesia", type: "Retail" },
  LS: { name: "Reliance Sekuritas Indonesia Tbk.", type: "Retail" },
  OK: { name: "NET SEKURITAS", type: "Retail" },
  PF: { name: "Danasakti Sekuritas Indonesia", type: "Retail" },
  PI: { name: "Magenta Kapital Sekuritas Indonesia", type: "Retail" },
  RB: { name: "Ina Sekuritas Indonesia", type: "Retail" },
  TF: { name: "Laba Sekuritas Indonesia", type: "Retail" },
  XC: { name: "Ajaib Sekuritas Asia", type: "Retail" },
  XL: { name: "Stockbit Sekuritas Digital", type: "Retail" },
  YB: { name: "Yakin Bertumbuh Sekuritas", type: "Retail" },
  YJ: { name: "Lotus Andalan Sekuritas", type: "Retail" },
  YO: { name: "Amantara Sekuritas Indonesia", type: "Retail" },

  // Mix
  BB: { name: "Verdhana Sekuritas Indonesia", type: "Mix" },
  BS: { name: "Equity Sekuritas Indonesia", type: "Mix" },
  CC: { name: "MANDIRI SEKURITAS", type: "Mix" },
  CP: { name: "KB Valbury Sekuritas", type: "Mix" },
  EP: { name: "MNC Sekuritas", type: "Mix" },
  ES: { name: "EKOKAPITAL SEKURITAS", type: "Mix" },
  IF: { name: "SAMUEL SEKURITAS INDONESIA", type: "Mix" },
  IH: { name: "Indo Harvest Sekuritas", type: "Mix" },
  II: { name: "Danatama Makmur Sekuritas", type: "Mix" },
  KZ: { name: "CLSA Sekuritas Indonesia", type: "Mix" },
  MG: { name: "Semesta Indovest Sekuritas", type: "Mix" },
  PD: { name: "Indo Premier Sekuritas", type: "Mix" },
  PG: { name: "Panca Global Sekuritas", type: "Mix" },
  YP: { name: "Mirae Asset Sekuritas Indonesia", type: "Mix" },
};

// Color styling moved to CSS via [data-broker-type] and CSS variables

const BROKER_CODES = new Set(Object.keys(BROKERS));
const CODE_REGEX = /^([A-Z]{2})$/;

function widgetModifier() {
  const selector = "#widget-container > div:first-child";
  const elements = document.querySelector(selector);

  if (!elements || elements.classList.contains("widget-content")) return;

  elements.classList.add("widget-content");
}

// ─── Core: process a single element ──────────────────────────────────────────

function processElement(el) {
  if (el.querySelector("[data-broker-fragment]")) return;

  const text = el.textContent.trim();
  if (text === "-") return;
  if (!CODE_REGEX.test(text)) return;
  const code = text;
  if (!BROKER_CODES.has(code)) return;

  const broker = BROKERS[code];

  el.textContent = "";
  el.title = broker.name;
  // Use CSS classes instead of inline styles
  el.classList.add("broker-container");
  el.setAttribute("data-broker-type", broker.type);

  const badge = document.createElement("span");
  badge.setAttribute("data-broker-fragment", "");
  badge.textContent = code;
  badge.classList.add("broker-badge");

  const label = document.createElement("span");
  label.setAttribute("data-broker-fragment", "");
  label.textContent = broker.type.toUpperCase();
  label.classList.add("broker-label");

  el.appendChild(badge);
  el.appendChild(label);
  el.setAttribute("data-broker-replaced", "true");
}

// ─── Core: scan subtree ───────────────────────────────────────────────────────

function scanAndReplace(root = document) {
  const elements = root.querySelectorAll(
    ".bandar-detector-wrapper .ant-table-cell p, .ant-table-cell span",
  );

  elements.forEach((el) => {
    // Skip fragment yang kita buat sendiri
    if (el.getAttribute("data-broker-fragment")) return;

    // Skip elemen yang nested DI DALAM elemen replaced lain
    // tapi JANGAN skip elemen replaced itu sendiri —
    // React mungkin sudah wipe children-nya dan perlu di-process ulang
    const replaced = el.closest("[data-broker-replaced]");
    if (replaced && replaced !== el) return;

    processElement(el);
  });
}

// ─── Initial scan ─────────────────────────────────────────────────────────────

scanAndReplace(document);
widgetModifier();

// ─── Debounced scan scheduler ─────────────────────────────────────────────────

const pendingRoots = new Set();
let scanScheduled = false;

function scheduleScan(root) {
  if (!root) return;
  const r = root.nodeType === 1 ? root : document;
  pendingRoots.add(r);
  if (scanScheduled) return;
  scanScheduled = true;
  requestAnimationFrame(() => {
    scanScheduled = false;
    pendingRoots.forEach((pr) => {
      try {
        scanAndReplace(pr);
      } catch (_) {}
    });
    pendingRoots.clear();
  });
}

// ─── MutationObserver ─────────────────────────────────────────────────────────
// Selalu observe document.body agar tidak jadi orphan saat React unmount container

const observer = new MutationObserver((mutations) => {
  for (const m of mutations) {
    if (m.type === "characterData") {
      const parent = m.target?.parentElement;
      if (parent && !parent.closest("[data-broker-replaced]")) {
        scheduleScan(parent);
      }
      continue;
    }

    if (m.type === "childList") {
      // Deteksi React yang menghapus badge kita → scan parent segera
      m.removedNodes.forEach((node) => {
        if (
          node.nodeType === 1 &&
          node.getAttribute &&
          node.getAttribute("data-broker-fragment")
        ) {
          if (m.target) scheduleScan(m.target);
        }
      });

      scheduleScan(m.target);
      m.addedNodes.forEach((node) => {
        if (node.nodeType === 1) scheduleScan(node);
        else if (node.nodeType === 3 && node.parentNode)
          scheduleScan(node.parentNode);
      });
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true,
});

// ─── Fallback periodic scan ───────────────────────────────────────────────────
// Safety net untuk SPA navigation yang kadang tidak trigger MutationObserver

setInterval(() => {
  try {
    scanAndReplace(document);
    widgetModifier();
  } catch (_) {}
}, 3000);
