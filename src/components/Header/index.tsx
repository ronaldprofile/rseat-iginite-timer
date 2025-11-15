import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt='ignite logo' />
      <nav>
        <ul>
          <li>
            <NavLink to='/' title='Home'>
              <Timer size={24} />
            </NavLink>
          </li>
          <li>
            <NavLink to='/history' title='History'>
              <Scroll size={24} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
