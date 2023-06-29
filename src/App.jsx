import './App.css';
import Header from './components/Header';
import StudentsList from './components/StudentsList';

function App() {
  const malesStudents = [
    {
      matricule: 1,
      nom: 'Ben',
      prenom: 'Jacques',
      genre: 'Masculin',
      filiere: 'Gestion',
    },
    {
      matricule: 2,
      nom: 'Magengo',
      prenom: 'Guttembert',
      genre: 'Masculin',
      filiere: 'IRT',
    },
    {
      matricule: 3,
      nom: 'ABC',
      prenom: 'Jean',
      genre: 'Masculin',
      filiere: 'IRT',
    },
  ];

  const femalesStudents = [
    {
      matricule: 4,
      nom: 'Joli',
      prenom: 'Joliette',
      genre: 'Féminin',
      filiere: 'Gestion',
    },
    {
      matricule: 5,
      nom: 'Magengo',
      prenom: 'Guttemberte',
      genre: 'Féminin',
      filiere: 'IRT',
    },
    {
      matricule: 6,
      nom: 'ABC',
      prenom: 'Jeanne',
      genre: 'Féminin',
      filiere: 'IRT',
    },
  ];
  return (
    <div className="wrapper">
      <Header />

      <main>
        <section className="section">
          <StudentsList title="Liste des hommes" data={malesStudents} />
          <StudentsList title="Liste des femmes" data={femalesStudents} />
        </section>
      </main>
    </div>
  );
}

export default App;
