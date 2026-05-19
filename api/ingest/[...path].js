export default async function handler(req, res) {
  const path = req.query.path?.join('/') || ''
  const url = `https://us.i.posthog.com/${path}?${new URLSearchParams(req.query).toString()}`

  const response = await fetch(url, {
    method: req.method,
    headers: {
      'content-type': req.headers['content-type'] || 'application/json',
    },
    body: req.method === 'GET' ? undefined : req.body,
  })

  const text = await response.text()
  res.status(response.status).send(text)
}