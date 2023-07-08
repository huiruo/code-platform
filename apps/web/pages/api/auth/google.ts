import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '@common/session'
import { THIRD_PARTY_LOGIN_TAG, webRedirect } from '@common/constants'
import { LoginSuccessPayload } from 'types'
import { handleGoogleAuthCodeApi } from '@services/nextApi'

export default withIronSessionApiRoute(async (req, res) => {
  const { code } = req.query
  try {
    const result: any = await handleGoogleAuthCodeApi(code as string)
    const data = await result.json();
    req.session.payload = data
    await req.session.save()

    res.redirect(`${webRedirect}?from=${THIRD_PARTY_LOGIN_TAG}`)
  } catch (e) {
    console.log('google auth error:',e)
    const error: any = e
    res.status(500).json(error.errors[0])
  }
}, sessionOptions)
