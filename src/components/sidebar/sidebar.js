
import React from 'react';
import styles from './sidebar.module.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logoSD.png'
import { Image } from 'semantic-ui-react';
import { BsClipboardData, BsCardList } from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'
import { FaUserNinja, FaMoneyCheck} from 'react-icons/fa'
import { MdLibraryBooks } from 'react-icons/md'
import { GiBlackBelt, GiHamburgerMenu } from 'react-icons/gi'



function Sidebar({ hidden }) {
  const ResponsibleSidebar = (props) => {
    return (
      <div className={styles.sidebar2}>
        <NavLink to="/Dashboard" className={styles.links2} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <BsClipboardData />
        </NavLink>
        <NavLink to="/Associação" className={styles.links2} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <AiOutlineSchedule />
        </NavLink>
        <NavLink to="/Atletas" className={styles.links2} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <FaUserNinja />
        </NavLink>
        <NavLink to="/AulasFrequencias" className={styles.links2} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <MdLibraryBooks />
        </NavLink>
        <NavLink to="/Campeonatos" className={styles.links2} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <GiBlackBelt />
        </NavLink>
        <NavLink to="/Modalidades" className={styles.links2} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <BsCardList />
        </NavLink>
        <NavLink to="/Prestacoes" className={styles.links2} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <FaMoneyCheck />
        </NavLink>

      </div>
    );
  }

  const ComponentSidebar = (props) => {
    return (
      <div className={styles.sidebar}>
        <Image className={styles.logoSmart} src={Logo} />
        <NavLink to="/Dashboard" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <BsClipboardData className={styles.icons} /> Dashboard
        </NavLink>
        <NavLink to="/Associação" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <AiOutlineSchedule className={styles.icons} /> Associação
        </NavLink>
        <NavLink to="/Atletas" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <FaUserNinja className={styles.icons} /> Atletas
        </NavLink>
        <NavLink to="/AulasFrequencias" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <MdLibraryBooks className={styles.icons} /> Aulas e Frequências
        </NavLink>
        <NavLink to="/Campeonatos" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <GiBlackBelt className={styles.icons} /> Campeonatos
        </NavLink>
        <NavLink to="/Modalidades" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <BsCardList className={styles.icons} /> Modalidades
        </NavLink>
        <NavLink to="/Prestacoes" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          <FaMoneyCheck className={styles.icons} /> Prestação de Contas
        </NavLink>

      </div>
    );
  }
  return (
    hidden ? ResponsibleSidebar() : ComponentSidebar()
  )
}


export default Sidebar