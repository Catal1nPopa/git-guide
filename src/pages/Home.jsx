import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Bine ai venit la Ghidul Git, GitHub și GitLab
      </Typography>
      <Typography variant="body1" paragraph>
        Acest site static te ajută să înveți rapid cum să folosești Git și platforme precum GitHub și GitLab direct din linia de comandă (CMD sau terminal). Ideal pentru începători sau ca referință rapidă.
      </Typography>
      <Typography variant="h6" gutterBottom>Ce vei învăța:</Typography>
      <List>
        <ListItem>
          <ListItemText primary="🛠️ Cum să inițializezi și să gestionezi un repository local cu Git." />
        </ListItem>
        <ListItem>
          <ListItemText primary="📦 Cum să clonezi proiecte și să le încarci pe GitHub sau GitLab." />
        </ListItem>
        <ListItem>
          <ListItemText primary="🔄 Cum să faci commit-uri, push/pull și să colaborezi eficient." />
        </ListItem>
        <ListItem>
          <ListItemText primary="🧠 Best practices pentru controlul versiunilor." />
        </ListItem>
      </List>
      <Typography variant="body2" color="text.secondary">
        Ghid creat pentru a susține dezvoltarea open-source       </Typography>
    </Box>
  );
}
