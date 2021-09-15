import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  console.log(votes)

  const setRandomInt = (max) => {
    const setInt = () => {
      setSelected(Math.floor(Math.random()*max))
    }
    return setInt
  }

  const vote = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Display text={anecdotes[selected]}/>
      <Display text={'has ' + votes[selected] + ' votes'}/>
      <Button onClick={setRandomInt(anecdotes.length)} text='random'/>
      <Button onClick={vote} text='vote'/>
      <MostVotes arr={votes} anec={anecdotes}/>
    </div>
  )
}

const Display = ({text}) => <div>{text}</div>

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const MostVotes = ({arr, anec}) => {
  var max = arr[0]
  var maxIndex = 0;
  for (let i=1; i<arr.length; i++) {
    if (arr[i]>max) {
      maxIndex = i
      max = arr[i];
    }
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anec[maxIndex]}</p>
      <p>has {max} votes</p>
    </div>
  )
}




export default App