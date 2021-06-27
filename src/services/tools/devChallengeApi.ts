import axios from 'axios'

const devChallengeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_CHALLENGE_API_URL
})

export default devChallengeApi
