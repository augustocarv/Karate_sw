import React from 'react';
import styles from './sidebar.module.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logoSD.png'
import { Image } from 'semantic-ui-react';

const ComponentSidebar = (props) => {
  return (
    <div className={styles.sidebar}>
        <Image className={styles.logoSmart} src={Logo} />

        <NavLink to="/Associação" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          Associação
      </NavLink>
        <NavLink to="/Atletas" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          Atletas
      </NavLink>
        <NavLink to="/AulasFrequencias" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          Aulas e Frequências
      </NavLink>
        <NavLink to="/Campeonatos" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          Campeonatos
      </NavLink>
        <NavLink to="/Prestacoes" className={styles.links} style={{ color: 'white', textDecoration: 'inherit' }} activeClassName={styles.activeLinks}>
          Prestação de Contas
      </NavLink>
    </div>
  );
}
export default ComponentSidebar