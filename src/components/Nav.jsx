import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <div>

        </div>
        <nav>
            <h1 className='name'><Link to="/">Maureen Fenninger</Link></h1>
            <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
