import { Typography } from '@mui/material';
import CommandBlock from '../components/CommandBlock';

export default function GitBasics() {
  return (
    <>
      <Typography variant="h5" gutterBottom>Comenzi Git de bază</Typography>
      <CommandBlock command="git init" description="Creează un nou repository Git local în folderul curent." />
      <CommandBlock command="git config --global user.name 'Numele tău'" description="Setează numele utilizatorului." />
      <CommandBlock command="git config --global user.email 'email@exemplu.com'" description="Setează emailul folosit în commit-uri." />
      <CommandBlock command="git add ." description="Adaugă toate fișierele în staging." />
      <CommandBlock command="git commit -m 'mesaj'" description="Salvează modificările local." />
      <CommandBlock command="git status" description="Afișează fișierele modificate și ce urmează să fie commit-uite." />
      <CommandBlock command="git log" description="Vezi istoricul complet al modificărilor." />
    </>
  );
}
