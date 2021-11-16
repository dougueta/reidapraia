import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Header from "components/Header";
import PageBase from 'components/PageBase'
import Home from 'components/Home'
import Sortition from 'components/Sortition'
import Ranking from 'components/Ranking'
import CreatePlayer from 'components/CreatePlayer'
import CreateMatch from 'components/CreateMatch'
import Player from 'components/Player'
import Match from 'components/Match'
import Stats from 'components/Stats'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <PageBase>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorteio" element={<Sortition />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/jogador/" element={<Player />} />
          <Route path="/jogador/criar" element={<CreatePlayer />} />
          <Route path="/estatisticas" element={<Stats />} />
          <Route path="/partida" element={<Match />} />
          <Route path="/partida/criar" element={<CreateMatch />} />
        </Routes>
        {/* <Footer /> */}
      </PageBase>
    </BrowserRouter>
  )
}

export default App
