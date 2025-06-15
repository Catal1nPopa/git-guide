import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Home from './pages/Home';
import GitBasics from './pages/GitBasics';
import GitHubGuide from './pages/GitHubGuide';
import GitLabGuide from './pages/GitLabGuide';
import GitAdvanced from './pages/GitAdvanced';

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/git">Git</Button>
          <Button color="inherit" component={Link} to="/github">GitHub</Button>
          <Button color="inherit" component={Link} to="/gitlab">GitLab</Button>
          <Button color="inherit" component={Link} to="/advanced">Avansat</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/git" element={<GitBasics />} />
          <Route path="/github" element={<GitHubGuide />} />
          <Route path="/gitlab" element={<GitLabGuide />} />
          <Route path="/advanced" element={<GitAdvanced />} />
        </Routes>
      </Container>
    </Router>
  );
}
