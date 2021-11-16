import React from 'react'

const players = [
  'frota',
  'cabeça',
  'nene',
  'tio phill',
  'kiko',
  'edinho',
  'jãozinho',
  'danilo',
  'véio',
  'rudnaldo',
  'marcão'
]

const getCouples = players => players.sort(() => Math.random() - 0.5)

const TeamSort = () => {
  const couples = getCouples(players)
  return (
    <div>
      {couples.map(c => (
        <p key={c.id}>{c}</p>
      ))}
    </div>
  )
}

export default TeamSort
