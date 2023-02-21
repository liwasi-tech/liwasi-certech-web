import './Home.css';
import { PersonaForm } from '../PersonaForm/PersonaForm';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <PersonaForm />
      </header>
    </div>
  );
}

export {Home};
