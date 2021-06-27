import { NextSeo } from 'next-seo'
import { Flex } from '@chakra-ui/react'

import BaseTemplate from 'templates/Base'

import Wrapper from 'components/Wrapper'
import ChallengeMainInfo from 'components/ChallengeMainInfo'
import ChallengeImagesPresentation from 'components/ChallengeImagesPresentation'
import ChallengeBrief from 'components/ChallengeBrief'
import ContributorCard from 'components/ContributorCard'
import { ContributorProps } from 'components/ContributorCard'

export type ChallengeDetail = {
  background: string
  name: string
  description: string
  brief: string
  images: string[]
  type: string
  level: string
  techs: string[]
  initialProjectUrl: string
  author: ContributorProps
}

export type ChallengeTemplateProps = {
  challenge: ChallengeDetail
}

const ChallengeTemplate = ({ challenge }: ChallengeTemplateProps) => (
  <>
    <NextSeo
      title={`${challenge.name} - DevChallenge`}
      description={challenge.description}
      canonical="https://devchallenge.com.br"
      openGraph={{
        url: 'https://devchallenge.com.br',
        title: `${challenge.name} - DevChallenge`,
        description: challenge.description,
        images: challenge.images.map((image) => ({
          url: image,
          width: 1200,
          height: 620,
          alt: challenge.name
        })),
        site_name: 'DevChallenge'
      }}
    />

    <BaseTemplate>
      <Wrapper>
        <Flex
          mt="8"
          flexDirection={[
            'column-reverse',
            'column-reverse',
            'column-reverse',
            'row'
          ]}
          alignItems="center"
          justifyContent="center"
        >
          <ChallengeMainInfo
            mt={['12', '12', '12', '0']}
            name={challenge.name}
            description={challenge.description}
            type={challenge.type}
            level={challenge.level}
            techs={challenge.techs}
            initialProjectUrl={challenge.initialProjectUrl}
          />

          <ChallengeImagesPresentation
            ml={['0', '0', '0', '6', '16']}
            images={challenge.images}
          />
        </Flex>

        <ChallengeBrief mt="16" brief={challenge.brief} />

        <Flex alignItems="center" justifyContent="center" marginY="12">
          <ContributorCard
            name={challenge.author.name}
            avatar={challenge.author.avatar}
            position={challenge.author.position}
            github={challenge.author.github}
            linkedin={challenge.author.linkedin}
          />
        </Flex>
      </Wrapper>
    </BaseTemplate>
  </>
)

export default ChallengeTemplate
