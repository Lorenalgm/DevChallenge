import { NextSeo } from 'next-seo'

import BaseTemplate from 'templates/Base'

import Wrapper from 'components/Wrapper'
import CommunityOptionsCards from 'components/CommunityOptionsCards'
import ContributorsList from 'components/ContributorsList'
import { ContributorProps } from 'components/ContributorCard'

export type CommunityTemplateProps = {
  contributors: ContributorProps[]
}

const CommunityTemplate = ({ contributors }: CommunityTemplateProps) => (
  <>
    <NextSeo
      title="Comunidade - DevChallenge"
      description="Participe da nossa comunidade e vamos crescer juntos!"
      canonical="https://devchallenge.com.br"
      openGraph={{
        url: 'https://devchallenge.com.br',
        title: 'DevChallenge',
        description: 'Participe da nossa comunidade e vamos crescer juntos!',
        images: [
          {
            url: 'https://devchallenge.com.br/img/banner.png',
            width: 1200,
            height: 620,
            alt: 'DevChallenge'
          }
        ],
        site_name: 'DevChallenge'
      }}
    />

    <BaseTemplate>
      <Wrapper as="main">
        <CommunityOptionsCards as="section" id="options" mt="20" />

        <ContributorsList
          as="section"
          id="category-list"
          mt="16"
          mb="12"
          contributors={contributors}
        />
      </Wrapper>
    </BaseTemplate>
  </>
)

export default CommunityTemplate
