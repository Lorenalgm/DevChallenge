import { GetStaticProps } from 'next'

import CommunityTemplate, { CommunityTemplateProps } from 'templates/Community'

import ContributorResources from 'services/resources/contributor'

import ContributorTools from 'services/tools/contributor'

const CommunityPage = ({ contributors }: CommunityTemplateProps) => (
  <CommunityTemplate contributors={contributors} />
)

export const getStaticProps: GetStaticProps = async () => {
  const ONE_HOUR = 60 * 60
  const ONE_MINUTE = 60

  const { data, error } = await ContributorResources.getAll()

  if (error) {
    return {
      revalidate: ONE_MINUTE,
      props: {
        contributors: []
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contributors = data.map((contributor: any) =>
    ContributorTools.serializeDataFromApi(contributor)
  )

  return {
    revalidate: ONE_HOUR,
    props: {
      contributors
    }
  }
}

export default CommunityPage
