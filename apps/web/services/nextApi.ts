
const constUrl = 'http://192.168.186.118:3888'

export async function handleGoogleAuthCodeApi(code:string): Promise<any> {
  try {
    return fetch(`${constUrl}/user/google/auth/code?code=${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('NetWork Error', error)
    return {
      code: 0,
      message: error,
    }
  }
}