const CONSENT_KEY = 'qure_cookie_consent';
const SETTINGS_KEY = 'qure_cookie_settings';

const el = id => document.getElementById(id);

const checkboxes = [
  'strictly-necessary-cookies',
  'performance-cookies',
  'functional-cookies',
  'advertising-cookies'
].map(el);

const [strictly, performance_cookies, functional, advertising] = checkboxes;

const cookieBanner = el('qure_cookie_main');
const cookiePrefs = el('qure_cookie_preferences');
const btnDismiss = el('ba-cookie-dismiss');
const btnDismissSecondary = el('ba-cookie-dismiss-secondary');
const btnAccept = el('gdpr-accept-button');
const btnDecline = el('gdpr-decline-button');
const btnSave = el('gdpr-save-preferences-button');
const btnManage = document.querySelector('.manage_pref');

function show(el) { if (el) el.classList.remove('d-none'); }
function hide(el) { if (el) el.classList.add('d-none'); }

function showBanner() {
  show(cookieBanner);
  hide(cookiePrefs);
}
function showPrefs() {
  hide(cookieBanner);
  show(cookiePrefs);
}
function hideAll() {
  hide(cookieBanner);
  hide(cookiePrefs);
}

function loadStates() {
  const saved = sessionStorage.getItem(SETTINGS_KEY);
  if (saved) {
    try {
      const s = JSON.parse(saved);
      strictly && (strictly.checked = !!s.strictlyNecessary);
      performance_cookies && (performance_cookies.checked = !!s.performance_cookies);
      functional && (functional.checked = !!s.functional);
      advertising && (advertising.checked = !!s.advertising);
    } catch {}
  } else {
    strictly && (strictly.checked = true);
  }
}

function saveStates() {
  const s = {
    strictlyNecessary: strictly ? strictly.checked : false,
    performance_cookies: performance_cookies ? performance_cookies.checked : false,
    functional: functional ? functional.checked : false,
    advertising: advertising ? advertising.checked : false
  };
  sessionStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
}

function acceptAll() {
  checkboxes.forEach(cb => cb && (cb.checked = true));
  saveStates();
  sessionStorage.setItem(CONSENT_KEY, 'true');
  hideAll();
}

function declineAll() {
  sessionStorage.setItem(CONSENT_KEY, 'false');
  hideAll();
}

function addListeners() {
  btnAccept && btnAccept.addEventListener('click', e => { e.preventDefault(); acceptAll(); });
  btnDecline && btnDecline.addEventListener('click', e => { e.preventDefault(); declineAll(); });
  btnDismiss && btnDismiss.addEventListener('click', e => { e.preventDefault(); declineAll(); });
  btnDismissSecondary && btnDismissSecondary.addEventListener('click', e => { e.preventDefault(); showBanner(); });
  btnManage && btnManage.addEventListener('click', e => { e.preventDefault(); showPrefs(); });
  btnSave && btnSave.addEventListener('click', e => { e.preventDefault(); saveStates(); showBanner(); });
  checkboxes.forEach(cb => cb && cb.addEventListener('change', saveStates));
}

(function init() {
  const consent = sessionStorage.getItem(CONSENT_KEY);
  if (!consent || consent === 'false') showBanner();
  loadStates();
  addListeners();
})();