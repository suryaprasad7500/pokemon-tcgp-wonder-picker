import Grid from "@mui/material/Grid2"
import cardBack from "../../../public/tcg-card-back.jpg"
import Image from "next/image"

export default function PokemonCard() {
    const cards = [1, 2, 3, 4, 5]
    return (
        <Grid container direction="row" spacing = {2} justifyContent="center" alignItems="center" >
            {
                cards.map((number) => 
                    <Grid size={4} key={number}>
                        <Image
                            key = {number}
                            src = {cardBack}
                            alt = "Pokemon Card Back"
                        />
                    </Grid>
                )
            }
        </Grid>
    )
}