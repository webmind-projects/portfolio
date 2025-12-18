export type LeadPayload = {
  name: string
  email: string
  phone: string
  serviceType: string
  responseChannel: string
  budgetRange: string
  message: string
}

const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN

export async function submitLead(payload: LeadPayload) {
  const hasCredentials = Boolean(AIRTABLE_BASE_ID && AIRTABLE_TABLE_NAME && AIRTABLE_TOKEN)

  // Placeholder branch to keep UI responsive while credentials are missing.
  if (!hasCredentials) {
    console.warn('Airtable credentials are missing. Falling back to mock request.')
    await new Promise((resolve) => setTimeout(resolve, 1200))
    return { ok: false, offline: true }
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Name: payload.name,
          Email: payload.email,
          Budget: payload.budgetRange,
          Message: payload.message,
          Phone: payload.phone,
          ServiceType: payload.serviceType,
          ResponseChannel: payload.responseChannel,
          Source: 'portfolio',
          SubmittedAt: new Date().toISOString(),
        },
      }),
    },
  )

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || 'Erro ao enviar mensagem para o Airtable')
  }

  return { ok: true }
}
