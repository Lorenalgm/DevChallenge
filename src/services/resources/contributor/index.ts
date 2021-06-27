import devChallengeApi from 'services/tools/devChallengeApi'

const getAll = async () => {
  try {
    const response = await devChallengeApi.get('/devs')
    return { data: response.data }
  } catch (error) {
    return { error }
  }
}

export default {
  getAll
}
