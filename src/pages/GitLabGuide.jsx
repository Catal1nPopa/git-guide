import { Typography } from '@mui/material';
import CommandBlock from '../components/CommandBlock';

export default function GitLabGuide() {
  return (
    <>
      <Typography variant="h5" gutterBottom>Utilizarea GitLab din linia de comandă</Typography>
      <CommandBlock command="git clone https://gitlab.com/utilizator/proiect.git" description="Clonează un proiect GitLab local." />
      <CommandBlock command="git remote add origin https://gitlab.com/utilizator/proiect.git" description="Conectează repository-ul local la GitLab." />
      <CommandBlock command="git push -u origin main" description="Împinge codul pe GitLab (prima dată)." />
      <CommandBlock command="git pull origin main" description="Actualizează codul local cu modificările de pe GitLab." />
      <CommandBlock command="git push" description="Trimite modificările către GitLab." />
      <CommandBlock command="gitlab-ci.yml" description="Pentru CI/CD, GitLab utilizează fișierul .gitlab-ci.yml în root." />
    </>
  );
}
