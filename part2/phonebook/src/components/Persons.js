import React from "react";

const Persons = ({personsToDisplay, deletePerson}) => {
    return (
        <>
        {personsToDisplay.map(person => 
            <Person key={person.name} person={person} deletePerson={() => deletePerson(person)}/>
        )}
        </>
    )
}

const Person = (props) => {
    return (
        <li>
          Name: {props.person.name} {props.person.number}
          <button onClick={props.deletePerson} >delete</button>
        </li>
    )
}

export default Persons;

