// Broker mapping: code -> { name, type }
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
  ZR: { name: "Bumiputera Sekuritas", type: "S-Moneyn" },

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

// Color per type (sesuai design system)
const TYPE_COLORS = {
  "S-Money": "#0069A8",
  Whale: "#008236",
  Retail: "#3F3F46",
  Mix: "#0069A8",
};

// Build a Set of all known codes for fast lookup
const BROKER_CODES = new Set(Object.keys(BROKERS));

// Regex: match standalone 2-letter broker codes (exact cell text)
const CODE_REGEX = /^([A-Z]{2})$/;

/**
 * Process a single element: if its trimmed text is an exact broker code,
 * replace the text content and apply styling.
 */
function processElement(el) {
  const text = el.textContent.trim();
  // Skip if text is just a hyphen
  if (text === "-") return;
  if (!CODE_REGEX.test(text)) return;
  const code = text;
  if (!BROKER_CODES.has(code)) return;

  const broker = BROKERS[code];
  const color = TYPE_COLORS[broker.type] || "#aaaaaa";

  // Clear existing content
  el.textContent = "";
  el.title = broker.name;
  el.style.display = "inline-flex";
  el.style.alignItems = "center";
  el.style.gap = "4px";
  el.style.textTransform = "uppercase";

  // Badge (colored box with broker code)
  const badge = document.createElement("span");
  badge.textContent = code;
  badge.style.cssText = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${color};
    color: #fff;
    font-weight: 700;
    font-size: 11px;
    border-radius: 4px;
    padding: 1px 2px;
    min-width: 24px;
  `;

  // Type label text
  const label = document.createElement("span");
  label.textContent = broker.type.toUpperCase();
  label.style.cssText = `
    color: ${color};
    font-weight: 700;
    font-size: 10px;
  `;

  el.appendChild(badge);
  el.appendChild(label);
  el.setAttribute("data-broker-replaced", "true");
}

/**
 * Scan all leaf-level table cells and spans for broker codes.
 */
function scanAndReplace() {
  // Target common table cell and span selectors used by Stockbit
  const selectors = ".bandar-detector-wrapper .ant-table-cell p";
  const elements = document.querySelectorAll(selectors);

  elements.forEach((el) => {
    // Skip already processed
    if (el.getAttribute("data-broker-replaced")) return;
    // Only process if element has no child elements (leaf node with text)
    if (el.children.length === 0) {
      processElement(el);
    }
  });
}

// Initial scan
scanAndReplace();

// Watch for dynamic content (Stockbit is a SPA)
const observer = new MutationObserver(() => {
  scanAndReplace();
});

// Observe the entire document body for changes
observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["class", "style", "id", "data-*"],
});
