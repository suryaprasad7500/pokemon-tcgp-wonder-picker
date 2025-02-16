import Grid from "@mui/material/Grid2"
import styles from "./page.module.css";
import PokemonCard from "./ui/pokemon-card";
import { Button } from "@mui/material";

// importing icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PokemonCard />
        <Grid container justifyContent="center" alignItems="center">
          <Grid size = {6}>
            <Button variant="contained" fullWidth>
              Pick a card
            </Button>
          </Grid>
        </Grid>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/suryaprasad7500/pokemon-tcgp-wonder-picker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          Source Code
        </a>
        <a
          href="https://github.com/suryaprasad7500/pokemon-tcgp-wonder-picker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
