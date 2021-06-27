import { GetStaticProps, GetStaticPaths } from 'next'

import ChallengeTemplate, { ChallengeTemplateProps } from 'templates/Challenge'

import ChallengeResources from 'services/resources/challenge'

import ChallengeTools from 'services/tools/challenge'

const ChallengePage = ({ challenge }: ChallengeTemplateProps) => (
  <ChallengeTemplate challenge={challenge} />
)

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ONE_HOUR = 60 * 60

  const { data, error } = await ChallengeResources.getById(params!.id as string)

  if (error) {
    return { notFound: true }
  }

  return {
    revalidate: ONE_HOUR,
    props: {
      challenge: ChallengeTools.serializeChallengeDetailFromApi(data[0])
    }
  }
}

export default ChallengePage
