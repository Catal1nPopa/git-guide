import { Typography } from '@mui/material';
import CommandBlock from '../components/CommandBlock';

export default function GitHubGuide() {
  return (
    <>
      <Typography variant="h5" gutterBottom>Utilizarea GitHub din linia de comandă</Typography>
      <CommandBlock command="git clone https://github.com/utilizator/proiect.git" description="Clonează un repository GitHub local." />
      <CommandBlock command="git remote add origin https://github.com/utilizator/proiect.git" description="Asociază un repository local cu cel de pe GitHub." />
      <CommandBlock command="git push -u origin main" description="Trimite modificările locale către GitHub (prima dată)." />
      <CommandBlock command="git pull origin main" description="Obține ultimele modificări de pe GitHub." />
      <CommandBlock command="git branch -M main" description="Schimbă numele branchului local în 'main' (dacă e nevoie)." />
      <CommandBlock command="git push" description="Trimite modificările locale pe GitHub." />
    </>
  );
}
