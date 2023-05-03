const baseUrl = '/code-platform'

export async function fetchCode(params?: any): Promise<any> {
  try {
    return fetch(`${baseUrl}/code-engine/codeList`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}
