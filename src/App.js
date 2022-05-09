import styled from 'styled-components'
import Body from './Components/Body/Body'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import GlobalStyle from './GlobalStyle'

function App () {
  return(
    <>
    <GlobalStyle />
    <GeneralContainer>
      <GeneralWrap>

        <Header />
        <Body />
        <Footer />
      
      </GeneralWrap>
    </GeneralContainer>
    </>
  )
}
export default App

const GeneralContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
const GeneralWrap = styled.div`
  width: 97%;
  background-color: 1E1E28;
  height: 90vh;

  @media screen and (max-width: 425px){
    width: 100%;
  }
`