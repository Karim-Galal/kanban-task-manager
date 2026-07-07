
import './App.css'
import Board from './components/Board'
import Column from './components/Column'
import Container from './components/Container'
import SiteHeading from './components/SiteHeading'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Container> 

          <SiteHeading />
          
          <Board>

            <Column state='planned' />
            <Column state='ongoing' />
            <Column state='done' />

          </Board>

          

        </Container>

        <Footer />

        
      </div>

      
      
    </>
  )
}

export default App
