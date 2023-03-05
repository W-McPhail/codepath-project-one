import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img src="./src/assets/awning.png"></img>
        <h1>Favorite Turtles</h1>

      </div>
      <div className='Container'>
        <Card image="./src/assets/turtle.jpeg" name="Classic Turtle" description="Look at him..."></Card>
        <Card image="./src/assets/gucci.jpg" name="Gucci Turtle" description="Fancy upgrade."></Card>
        <Card image="./src/assets/cartoon.jpeg" name="Cartoon Turtle" description="Lookin a little different"></Card>
        <Card image="./src/assets/hamb.jpeg" name="Hamburger Turtle" description="TASTY"></Card>
        <Card image="./src/assets/waterturtle.jpg" name="Sea Turtle" description="He likes the water"></Card>
        <Card image="./src/assets/mario.jpg" name="Mario Turtle" description="He's a plumber"></Card>
        <Card image="./src/assets/ninja.jpg" name="Ninja Turtle" description="He's a mutant"></Card>
        <Card image="./src/assets/ilike.jpg" name="This guy ^^" description="Likes turtles"></Card>
        <Card image="./src/assets/ninja.jpg" name="Ninja Turtle" description="He's a mutant"></Card>
        <Card image="./src/assets/galap.jpeg" name="Galagos Tortoise" description="Absolute UNIT"></Card>



      </div>
    
    </div>
  )
}

export default App
