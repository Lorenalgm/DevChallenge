import { ContributorProps } from 'components/ContributorCard'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const serializeDataFromApi = (contributor: any): ContributorProps => ({
  id: contributor._id,
  avatar: contributor.avatar,
  name: contributor.name,
  position: contributor.position,
  github: contributor.github || '',
  linkedin: contributor.linkedin || ''
})

export default {
  serializeDataFromApi
}
