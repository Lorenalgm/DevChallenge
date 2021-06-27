import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'

import ChallengesResources from 'services/resources/challenge'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data, error } = await ChallengesResources.getAll()

  if (error) {
    return getServerSideSitemap(ctx, [])
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fields = data.map((challenge: any) => ({
    loc: `https://devchallenge.com.br/challenges/${challenge._id}`,
    lastmod: new Date().toISOString()
  }))

  fields.push(
    {
      loc: 'https://devchallenge.com.br',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://devchallenge.com.br/challenges',
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://devchallenge.com.br/community',
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
