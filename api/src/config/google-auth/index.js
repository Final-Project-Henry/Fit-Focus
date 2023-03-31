/* eslint-env node */

const axios = require('axios')
const querystring = require('node:querystring')

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI } = process.env

const getGoogleToken = async ({ code }) => {
  const url = 'https://oauth2.googleapis.com/token'

  const value = {
    code,
    client_id: GOOGLE_CLIENT_ID,
    client_secret: GOOGLE_CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code',
  }
  try {
    const res = await axios.post(url, querystring.stringify(value), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    return res.data
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = getGoogleToken
