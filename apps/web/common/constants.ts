export const THIRD_PARTY_LOGIN_TAG = 't'

export const webRedirect = 'http://localhost:3800/containers'

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

const HOST = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_HOST : process.env.NEXT_PUBLIC_PROD_HOST

const googleRedirectUri = `${HOST}/api/auth/google`

const testRedirectUri = 'http://localhost:3800/api/auth/google'

export const googleAuthUrl =
  `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${testRedirectUri}` +
  `&scope=profile email&client_id=${googleClientId}`

// export const HOST =
//   process.env.NODE_ENV === 'development' ? 'http://localhost:3800' : 'https://xxx.com'
const googleRedirectUriByNestjs = `${HOST}/user/google/auth/handler`

const googleAuthUrlByNestjs = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${googleRedirectUriByNestjs}&scope=profile email&client_id=${googleClientId}`