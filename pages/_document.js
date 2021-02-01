import Document, { Html, Main, NextScript } from 'next/document'
import { Container, NavLink, Text } from 'theme-ui'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
          <footer>
            <Text style={{bg:'sheet', textAlign:'center',width:'100%'}}>
              <Container>
                Official club registered at Mt. Everest Academy
                <br/>  
                Email us at <b>hackclubmea@gmail.com </b> 
              </Container>
              <Container>
                &copy; MEA Hack Club 2020
              </Container>
            </Text>
          </footer>
        </body>
      </Html>
    )
  }
}
