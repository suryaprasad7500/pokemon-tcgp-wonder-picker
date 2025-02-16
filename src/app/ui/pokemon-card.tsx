import Grid from "@mui/material/Grid2"
import cardBack from "../../../public/tcg-card-back.jpg"
import cardFront from "../../../public/tcg-card-front.png"
import Image from "next/image"

let currentFace = cardBack;

export default function PokemonCard() {
    const cards = [1, 2, 3, 4, 5]
    return (
        <Grid container spacing={4} justifyContent="center" alignItems="center">
            {
                cards.map((number) => 
                    <Grid size={4} key={number}>
                        <div className="relative">
                            <Image
                                key = {number}
                                src = {currentFace}
                                alt = {`Pokemon card ${number}`}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </Grid>
                )
            }
        </Grid>
    )
}