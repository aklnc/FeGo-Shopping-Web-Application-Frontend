import { Link } from "react-router-dom"

import '../styles/components/navigation.scss'

const Navigaton = () => {
    return <nav className="navigation">
        <Link to='/'><img src="./Logo.png" alt="FeGo Logo"/></Link>
        <ul>

        </ul>
    </nav>
}

export default Navigaton