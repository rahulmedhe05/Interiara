// Lead management utility
export async function addLead(data: {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}) {
  // Placeholder for lead management
  // In production, send to your backend or CRM
  try {
    // Could be a database insert, API call, etc.
    console.log('Lead captured:', data)
    return { success: true }
  } catch (error) {
    console.error('Error adding lead:', error)
    return { success: false }
  }
}
