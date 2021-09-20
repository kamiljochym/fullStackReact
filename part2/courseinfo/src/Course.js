

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }

const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
const Content = ({ course }) => {

    return (
        <div>
        {course.parts.map((part, i) =>

            <Part key={i} part={part} />

        )}
        
        
        </div>
    )
}

const Course = ({course}) => {
    return (
        <div>
        <Header course={course}/>
        <Content course={course}/>
        </div>
    )
}

export default Course