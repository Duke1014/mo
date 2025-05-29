import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <div>
          
        </div>
        <nav>
            <h1 className='name'>Maureen Fenninger</h1>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
