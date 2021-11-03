import React from "react";

const PersonForm = ({newName, newNumber, handleNewName, handleNewNumber, addName}) => {
    return (
        <form>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button onClick={addName}>add</button>
        </div>
      </form>
    )
}

export default PersonForm;

