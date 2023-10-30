import { useState } from "react"

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StaticLine = (props) => {
  if (props.text === 'positive') {
    return (
      <div>
        <p>{props.value}%</p>
      </div>
    )
  }
  return (
    <div>
      <p>{props.value}</p>
    </div>
  )
}

const Statics = (props) => {
  if (props.statics[0] === 0 && props.statics[1] === 0 && props.statics[2] === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }
  else {
    return (
      <div>
        <h1>statics</h1>
        <table>
          <tbody>
            <tr>
              <td>good</td><td><StaticLine text='good' value={props.statics[0]}></StaticLine></td>
            </tr>

            <tr>
              <td>neutral</td><td><StaticLine text='neutral' value={props.statics[1]}></StaticLine></td>
            </tr>

            <tr>
              <td>bad</td><td><StaticLine text='bad' value={props.statics[2]}></StaticLine></td>
            </tr>

            <tr>
              <td>all</td><td><StaticLine text='all' value={props.statics[0] + props.statics[1] + props.statics[2]}></StaticLine></td>
            </tr>

            <tr>
              <td>average</td><td><StaticLine text='average' value={(props.statics[0] + props.statics[1] + props.statics[2]) / 3}></StaticLine></td>
            </tr>

            <tr>
              <td>positive</td><td><StaticLine text='positive' value={props.statics[0] / (props.statics[0] + props.statics[1] + props.statics[2])}></StaticLine></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text='good' handleClick={() => setGood(good + 1)}></Button>
        <Button text='neutral' handleClick={() => setNeutral(neutral + 1)}></Button>
        <Button text='bad' handleClick={() => setBad(bad + 1)}></Button>
      </div>
      <Statics statics={[good, neutral, bad]}></Statics>
    </div>
  )
}

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const handleClick = () => {
//     setCounter(counter + 1)
//   }

//   // setTimeout(() => setCounter(counter + 1), 1000)

//   return(
//     <div>
//       <div>{counter}</div>
//       <button onClick = {handleClick}>
//       plus
//       </button>
//       <button onClick = {() => setCounter(0)}>
//       clear
//       </button>
//     </div>
//   )
// }


// const Header = (props) => {
//   return (
//     <h1>{props.course.name}</h1>
//   )
// }


// const Part = (props) => {
//   return (
//     <p>{props.name} {props.exercise}</p>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       {props.course.parts.map((part,index) => (
//         <Part key={index} name={part.name} exercise={part.exercises}/>
//       ))}
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.course.parts.reduce((total,part) => total + part.exercises, 0)}</p>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course}/>
//       <Total course={course}/>
//     </div>
//   )
// }



export default App

