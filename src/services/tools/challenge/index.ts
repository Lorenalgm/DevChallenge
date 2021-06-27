import ContributorTools from '../contributor'

import { ChallengeDetail } from 'templates/Challenge'
import { ChallengePreviewProps } from 'components/ChallengePreviewCard'

const serializeChallengeToPreviewFromApi = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  challenge: any
): ChallengePreviewProps => ({
  id: challenge._id,
  background: challenge.background,
  name: challenge.name,
  description: challenge.description,
  type: challenge.type,
  level: challenge.level,
  techs: challenge.techs
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const serializeChallengeDetailFromApi = (challenge: any): ChallengeDetail => ({
  background: challenge.background,
  name: challenge.name,
  description: challenge.description,
  brief: challenge.brief,
  images: challenge.images,
  type: challenge.type,
  level: challenge.level,
  techs: challenge.techs,
  initialProjectUrl: challenge.github_url,
  author: ContributorTools.serializeDataFromApi(challenge.dev_id)
})

export default {
  serializeChallengeToPreviewFromApi,
  serializeChallengeDetailFromApi
}
