import { Paper, Typography } from '@mui/material';

export default function CommandBlock({ command, description }) {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="body1" sx={{ fontFamily: 'monospace', backgroundColor: '#000', color: '#0f0', padding: 1, borderRadius: 1 }}>
        {command}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        {description}
      </Typography>
    </Paper>
  );
}
