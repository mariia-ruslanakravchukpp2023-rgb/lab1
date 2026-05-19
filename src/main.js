import * as Sentry from "@sentry/browser";
import posthog from 'posthog-js'

Sentry.init({
  dsn: "https://de302a42730c378efb98230af24183bc@o4511369102950400.ingest.us.sentry.io/4511369676849152",

  integrations: [
    Sentry.browserTracingIntegration(),
  ],

  tracesSampleRate: 1.0,

  environment: "development",
});

Sentry.setUser({
  id: "12345",
  email: "student@example.com",
  segment: "premium_user"
});

posthog.init('KEY', {
  api_host: '/ingest',
  ui_host: 'https://us.posthog.com',
  autocapture: true,
  capture_pageview: true,
  person_profiles: 'identified_only',
})

document.body.insertAdjacentHTML(
  'beforeend',
  `
  <div style="text-align:center; font-weight:bold; margin:10px;">
    ${import.meta.env.VITE_APP_STATUS || 'Development'}
  </div>

  <button id="add-reading-btn" style="display:block;margin:20px auto;padding:10px;">
    Додати показник
  </button>

  <button id="complete-payment-btn" style="display:block;margin:20px auto;padding:10px;">
    Підтвердити оплату
  </button>

  <button id="urgent-btn" style="display:none;margin:20px auto;padding:10px;">
    Термінові показники
  </button>

  <button id="break-world-btn" style="display:block;margin:20px auto;padding:10px;background:red;color:white;">
    Break the world
  </button>
`
)

document.getElementById('add-reading-btn').addEventListener('click', () => {

  posthog.capture('reading_added', {
    category: 'electricity',
    value: 250,
    is_authenticated: true,
  })

  alert('Показник додано')
})

document.getElementById('complete-payment-btn').addEventListener('click', () => {

  posthog.capture('payment_completed', {
    amount: 1200,
    payment_method: 'card',
  })

  alert('Оплату підтверджено')
})

document.getElementById('break-world-btn').addEventListener('click', () => {
  alert('Зараз буде помилка для Sentry')

  const error = new Error("Sentry Test Error: Something went wrong!")

  Sentry.captureException(error)

  throw error
})

posthog.onFeatureFlags(() => {

  if (posthog.isFeatureEnabled('show-urgent-filter')) {
    document.getElementById('urgent-btn').style.display = 'block'
  } else {
    document.getElementById('urgent-btn').style.display = 'none'
  }

})