import React, { useState } from 'react'
import useForm from 'hooks/useForm'
import Input from 'components/Form/Input'
import { CustomButtom as Button } from 'components/Form/Button'
import Box from '@mui/material/Box'

// const getCouples = players => players.sort(() => Math.random() - 0.5)

const TeamSort = () => {
  const [players, setPlayers] = useState([])
  const playername = useForm()
  const handleSubmit = evt => {
    evt.preventDefault()
    console.log(evt.target)
  }
  console.log(playername)
  const handleClick = evt => {
    evt.preventDefault()
    console.log(evt.target.value)
  }
  // const couples = getCouples(players)
  return (
    <>Sorteio de time</>
    // <form onSubmit={handleSubmit}>
    //   <Input
    //     type="text"
    //     id="teste"
    //     name="playername"
    //     {...playername}
    //     onChange={handleClick}
    //   />
    //   <Box sx={{ mt: 6 }} />
    //   <Button onClick={handleClick} variant="primary">
    //     Adicionar
    //   </Button>
    //   <Box sx={{ mt: 6 }} />

    //   <Button type="submit" variant="primary">
    //     Salvar
    //   </Button>
    // </form>
  )
}

export default TeamSort
