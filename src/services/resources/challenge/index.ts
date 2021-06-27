import devChallengeApi from 'services/tools/devChallengeApi'

const CHALLENGE_URL = '/challenges'

const getAll = async () => {
  try {
    const response = await devChallengeApi.get(CHALLENGE_URL)
    return { data: response.data }
  } catch (error) {
    return { error }
  }
}

const getById = async (id: string) => {
  try {
    const response = await devChallengeApi.get(`${CHALLENGE_URL}/${id}`)
    return { data: response.data }
  } catch (error) {
    return { error }
  }
}

export default {
  getAll,
  getById
}
