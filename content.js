// Broker mapping: code -> { name, type }
const BROKERS = {
  // Smartmo
  AN: { name: "Wanteg Sekuritas", type: "Smartmo" },
  AO: { name: "ERDIKHA ELIT SEKURITAS", type: "Smartmo" },
  AR: { name: "Binaartha Sekuritas", type: "Smartmo" },
  AT: { name: "Phintraco Sekuritas", type: "Smartmo" },
  BR: { name: "Trust Sekuritas", type: "Smartmo" },
  CD: { name: "Mega Capital Sekuritas", type: "Smartmo" },
  DD: { name: "Makindo Sekuritas", type: "Smartmo" },
  DH: { name: "SINARMAS SEKURITAS", type: "Smartmo" },
  DU: { name: "KAF Sekuritas Indonesia", type: "Smartmo" },
  DX: { name: "Bahana Sekuritas", type: "Smartmo" },
  EL: { name: "Evergreen Sekuritas Indonesia", type: "Smartmo" },
  FO: { name: "Forte Global Sekuritas", type: "Smartmo" },
  FZ: { name: "Waterfront Sekuritas Indonesia", type: "Smartmo" },
  GA: { name: "BNC Sekuritas Indonesia", type: "Smartmo" },
  GI: { name: "Webull Sekuritas Indonesia", type: "Smartmo" },
  GR: { name: "PANIN SEKURITAS Tbk.", type: "Smartmo" },
  HP: { name: "Henan Putihrai Sekuritas", type: "Smartmo" },
  IC: { name: "Integrity Capital Sekuritas", type: "Smartmo" },
  ID: { name: "Anugerah Sekuritas Indonesia", type: "Smartmo" },
  IN: { name: "INVESTINDO NUSANTARA SEKURITA", type: "Smartmo" },
  IT: { name: "INTI TELADAN SEKURITAS", type: "Smartmo" },
  IU: { name: "Indo Capital Sekuritas", type: "Smartmo" },
  KI: { name: "Ciptadana Sekuritas Asia", type: "Smartmo" },
  KK: { name: "Phillip Sekuritas Indonesia", type: "Smartmo" },
  LG: { name: "Trimegah Sekuritas Indonesia Tbk.", type: "Smartmo" },
  MU: { name: "Minna Padi Investama Sekuritas", type: "Smartmo" },
  NI: { name: "BNI Sekuritas", type: "Smartmo" },
  OD: { name: "BRI Danareksa Sekuritas", type: "Smartmo" },
  PC: { name: "FAC Sekuritas Indonesia", type: "Smartmo" },
  PO: { name: "Pilarmas Investindo Sekuritas", type: "Smartmo" },
  PP: { name: "Aldiracita Sekuritas Indonesia", type: "Smartmo" },
  PS: { name: "PARAMITRA ALFA SEKURITAS", type: "Smartmo" },
  QA: { name: "Tuntun Sekuritas Indonesia", type: "Smartmo" },
  RF: { name: "Buana Capital Sekuritas", type: "Smartmo" },
  RG: { name: "Profindo Sekuritas Indonesia", type: "Smartmo" },
  RO: { name: "Pluang Maju Sekuritas", type: "Smartmo" },
  RS: { name: "Yulie Sekuritas Indonesia Tbk.", type: "Smartmo" },
  SA: { name: "Elit Sukses Sekuritas", type: "Smartmo" },
  SF: { name: "Surya Fajar Sekuritas", type: "Smartmo" },
  SH: { name: "Artha Sekuritas Indonesia", type: "Smartmo" },
  SQ: { name: "BCA Sekuritas", type: "Smartmo" },
  SS: { name: "Supra Sekuritas Indonesia", type: "Smartmo" },
  TS: { name: "Dwidana Sakti Sekuritas", type: "Smartmo" },
  XA: { name: "NH Korindo Sekuritas Indonesia", type: "Smartmo" },
  ZR: { name: "Bumiputera Sekuritas", type: "Smartmon" },

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
  Smartmo: "#0069A8",
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
  el.style.gap = "8px";

  // Badge (colored box with broker code)
  const badge = document.createElement("span");
  badge.textContent = code;
  badge.style.cssText = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${color};
    color: #ffffff;
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 0.5px;
    border-radius: 5px;
    padding: 2px 6px;
    min-width: 30px;
    line-height: 1.6;
    font-family: monospace;
  `;

  // Type label text
  const label = document.createElement("span");
  label.textContent = broker.type.toUpperCase();
  label.style.cssText = `
    color: ${color};
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    font-family: inherit;
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

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
