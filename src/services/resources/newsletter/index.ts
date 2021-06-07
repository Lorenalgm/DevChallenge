import devChallengeApi from 'services/tools/devChallengeApi'

const saveEmail = async (email: string) => {
  try {
    const response = await devChallengeApi.post('/newsletter', { email })
    return { data: response.data }
  } catch (error) {
    return { error }
  }
}

export default {
  saveEmail
}
