import { NextSeo } from 'next-seo'

import BaseTemplate from 'templates/Base'

import ChallengesList from 'components/ChallengesList'
import { ChallengePreviewProps } from 'components/ChallengePreviewCard'

export type ChallengesTemplateProps = {
  challenges: ChallengePreviewProps[]
}

const ChallengesTemplate = ({ challenges }: ChallengesTemplateProps) => (
  <>
    <NextSeo
      title="Desafios - DevChallenge"
      description="Encontre um desafio certo para você e comece a evoluir!"
      canonical="https://devchallenge.com.br"
      openGraph={{
        url: 'https://devchallenge.com.br',
        title: 'DevChallenge',
        description: 'Encontre um desafio certo para você e comece a evoluir!',
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
      <ChallengesList as="main" mb="12" challenges={challenges} />
    </BaseTemplate>
  </>
)

export default ChallengesTemplate
