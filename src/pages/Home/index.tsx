import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div>
    <h1>Página Inicial</h1>
    <nav>
      <ul>
        <li>
          <Link to="/privacy">Política de Pricacidade</Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}

export default Home;