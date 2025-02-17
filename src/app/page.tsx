'use client';
import Grid from "@mui/material/Grid2"
import styles from "./page.module.css";
import PokemonCard from "./ui/pokemon-card";
import { Button } from "@mui/material";
import randomPicker from "./lib/random-picker"
import { useState } from "react";

// importing icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  const [pickedCard, setPickedCard] = useState(0);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PokemonCard 
          pickedCard = {pickedCard}
        />
        <Grid container justifyContent="center" alignItems="center">
          <Grid size = {6}>
            <Button variant="contained" fullWidth onClick={() => setPickedCard(randomPicker())}>
              Pick a card
            </Button>
            <Button variant="outlined" fullWidth onClick={() => setPickedCard(0)} disabled = {pickedCard === 0}>
              Reset
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
          href="https://www.linkedin.com/in/suryamalempati/"
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
