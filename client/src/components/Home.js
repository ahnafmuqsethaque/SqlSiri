import React from 'react'
import NavBar from './NavBar'
import SpeechToText from './Speech-to-text'
// import TableView from './TableView'
import Output from './Output'

const Home = () => {
    return (
        <div>
          <NavBar />
          <SpeechToText />
          {/* <TableView/> */}
          <Output/>
        </div>
    )
}

export default Home
