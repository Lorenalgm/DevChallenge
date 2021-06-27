import { GetStaticProps } from 'next'

import ChallengesTemplate, {
  ChallengesTemplateProps
} from 'templates/Challenges'

import ChallengeResources from 'services/resources/challenge'

import ChallengeTools from 'services/tools/challenge'

const ChallengesPage = ({ challenges }: ChallengesTemplateProps) => (
  <ChallengesTemplate challenges={challenges} />
)

export const getStaticProps: GetStaticProps = async () => {
  const ONE_HOUR = 60 * 60
  const ONE_MINUTE = 60

  const { data, error } = await ChallengeResources.getAll()

  if (error) {
    return {
      revalidate: ONE_MINUTE,
      props: {
        challenges: []
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const challenges = data.map((challenge: any) =>
    ChallengeTools.serializeChallengeToPreviewFromApi(challenge)
  )

  return {
    revalidate: ONE_HOUR,
    props: {
      challenges
    }
  }
}

export default ChallengesPage
