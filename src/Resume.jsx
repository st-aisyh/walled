import { useState } from 'react'
import viteLogo from '/vite.svg'
import bsiLogo from '/images.png'
import './App.css'
import Logo from './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="navbar">
      <ul>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Achievements">Achievements</a></li>
      </ul>
    </div>

    <h1>
      <span> Groot </span>
      <span> the Guardian</span>
    </h1>

    <div className="banner">
    <img className="pic" src="https://i.pinimg.com/736x/8b/21/5e/8b215ed6e4b80389d815921fe2eadb1e.jpg"/>
   
    <div className="desc">
        <p>
          <b>Personal Information</b>
        </p>

        <p>
          <b><i>Groot </i></b>is a member of the Flora colossus species, hailing from Planet X, the capital of the branch worlds. This mysterious and highly advanced planet is home to the Flora colossi, a race of sentient, tree-like beings known for their immense strength, regenerative abilities, and unique physiology. Their language, seemingly simple yet deeply complex, is characterized by their stiff larynxes, which make their vocalizations sound as though they are constantly repeating the phrase, "I am Groot." Despite this linguistic barrier, their speech carries nuanced meanings, decipherable only by those who are attuned to their tonal and inflectional subtleties. Groot is a particularly notable member of his species, celebrated for his bravery, loyalty, and deep connection to his companions, demonstrating that his limited verbal communication does not hinder his ability to form meaningful relationships and make a profound impact.
        </p>
      </div>
    </div>

<article id="Experience">
<h2>Experience</h2>
<hr/>
<div className="subjudul">
    <span>Guardian of the Galaxy</span>
    <span>Born - Death</span>
</div>
    <ul>
      <li>Assisted in saving the universe multiple times alongside the Guardians.</li>
      <li>Played a crucial role in battles, protecting allies with shield-like abilities.</li>
      <li>Demonstrated teamwork in various intergalactic missions. </li>
    </ul>

<div className="subjudul">
    <span>Sapling Form Training</span>
    <span>Recently</span>
</div>
    <ul>
      <li>Gained maturity and combat skills while growing back from sapling to full size.</li>
    </ul>
</article>

<article id="Achievements">
  <h2>Achievements</h2>
  <hr/>
  <ul>
    <li> Saved the Guardians by sacrificing himself and regenerating as Baby Groot </li>
    <li> Instrumental in acquiring and protecting the Power Stone </li>
    <li> Helped defeat Ronan the Accuser, Ego the Living Planet, and Thanos </li>
  </ul>
</article>

<article id="Skills">
    <h2>Skills</h2>
    <hr/>
      <p>
        <li> Exceptional physical strength and durability </li>
        <li> Regeneration and growth abilities </li>
        <li> Strategic thinker and loyal team player </li>
      </p>
  </article>

    <div>
    <a href="CV2.html"><button target="_blank">Next</button></a>
    <button disabled>Previous</button>
    </div>
    </>
   )
}

export default Resume
