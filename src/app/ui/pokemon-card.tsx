import Grid from "@mui/material/Grid2"
import cardBack from "../../../public/tcg-card-back.jpg"
import cardFront from "../../../public/tcg-card-front.png"
import Image from "next/image"

let currentFace = cardBack;

export default function PokemonCard() {
    const cards = [1, 2, 3, 4, 5]
    return (
        <div>
        <Grid container spacing = {2} justifyContent="center" alignItems="center" >
            {
                cards.map((number) => 
                    <Grid size={4} key={number}>
                        <Image
                            key = {number}
                            src = {cardBack}
                            alt = "Pokemon Card Back"
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </Grid>
                )
            }
        </Grid>
        </div>
    )
}