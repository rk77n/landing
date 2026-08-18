// Súhlas s cookies zdieľaný medzi bannerom a meraním. Banner po voľbe
// vystrelí CONSENT_EVENT, aby sa GA4 načítalo hneď a nie až po reloade.
export const CONSENT_COOKIE = 'cp_cookie_consent'
export const CONSENT_EVENT = 'cp:consent'

export type Consent = 'all' | 'necessary'

export function saveConsent(value: Consent) {
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=31536000; SameSite=Lax`
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export function hasDecided() {
  return document.cookie.includes(`${CONSENT_COOKIE}=`)
}

export function hasAnalyticsConsent() {
  return document.cookie.includes(`${CONSENT_COOKIE}=all`)
}
