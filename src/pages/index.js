import React from 'react'

const Text = () => {
    return (
        <div>
        <form>
        <p>First name:</p>
        <input
          type="text"
        />
        <p>Last name:</p>
        <input
          type="text"
        />
      </form>
      
      <p>Favourite Fruit</p>
      <input type="checkbox" value="bubbles" checked="checked" />
      <label>Apple</label>
      <p></p>
    <input type="checkbox" value="gregory" />
    <label>Banana</label>
    <p></p>
    <input type="checkbox" value="gregory" />
    <label>Orange</label>
    <p></p>
    <button className="btn btn-default" type="submit">Done</button>
      


        </div>
    )
}

export default Text
