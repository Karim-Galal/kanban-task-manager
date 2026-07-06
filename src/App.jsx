
import './App.css'
import Board from './components/Board'
import Column from './components/Column'
import Container from './components/Container'
import SiteHeading from './components/SiteHeading'

function App() {

  return (
    <>
      <div className=''>

        <Container> 

          <SiteHeading />
          
          <Board>

            <Column state='planned' />
            <Column state='ongoing' />
            <Column state='done' />

          </Board>


        </Container>

      </div>

      
      
    </>
  )
}

export default App
