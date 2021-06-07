import { NextSeo } from 'next-seo'

import BaseTemplate from 'templates/Base'

import Wrapper from 'components/Wrapper'
import Banner from 'components/Banner'
import CategoryCardList from 'components/CategoryCardList'
import Steps from 'components/Steps'
import Newsletter from 'components/Newsletter'

const HomeTemplate = () => (
  <>
    <NextSeo
      title="DevChallenge"
      description="Site para desenvolvedores melhorarem suas habilidades através de desafios de front-end, back-end e mobile!"
      canonical="https://devchallenge.com.br"
      openGraph={{
        url: 'https://devchallenge.com.br',
        title: 'DevChallenge',
        description:
          'Site para desenvolvedores melhorarem suas habilidades através de desafios de front-end, back-end e mobile!',
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
        <Banner as="section" id="banner" mt="40" />

        <CategoryCardList as="section" id="category-list" mt="40" />

        <Steps as="section" id="steps" mt="24" />

        <Newsletter as="section" id="newsletter" mt="16" mb="12" />
      </Wrapper>
    </BaseTemplate>
  </>
)

export default HomeTemplate
