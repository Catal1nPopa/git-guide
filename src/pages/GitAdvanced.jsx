import { Typography } from '@mui/material';
import CommandBlock from '../components/CommandBlock';

export default function GitAdvanced() {
  return (
    <>
      <Typography variant="h5" gutterBottom>Comenzi Git avansate</Typography>

      <CommandBlock
        command="git branch"
        description="Listează toate branch-urile locale."
      />
      <CommandBlock
        command="git checkout -b feature/nume"
        description="Creează și comută pe un nou branch numit feature/nume."
      />
      <CommandBlock
        command="git merge feature/nume"
        description="Unește branch-ul feature/nume în branch-ul curent."
      />
      <CommandBlock
        command="git rebase main"
        description="Rescrie istoricul ramurii curente peste main. Util pentru a menține un istoric curat."
      />
      <CommandBlock
        command="git stash"
        description="Salvează temporar modificările necomise."
      />
      <CommandBlock
        command="git stash pop"
        description="Aplică modificările stocate și le elimină din stash."
      />
      <CommandBlock
        command="git reset --hard HEAD~1"
        description="Șterge ultimul commit și revine complet la starea anterioară."
      />
      <CommandBlock
        command="git reflog"
        description="Afișează istoricul complet al acțiunilor — util pentru recuperarea commit-urilor șterse."
      />
    </>
  );
}
