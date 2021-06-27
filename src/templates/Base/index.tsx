import Header from 'components/Header'
import Footer from 'components/Footer'

type BaseTemplateProps = {
  children: React.ReactNode
}

const BaseTemplate = ({ children }: BaseTemplateProps) => (
  <>
    <Header id="header" marginBottom="12" />

    {children}

    <Footer id="footer" marginTop="auto" />
  </>
)

export default BaseTemplate
