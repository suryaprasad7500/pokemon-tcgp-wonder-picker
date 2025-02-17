import Grid from "@mui/material/Grid2"
import cardBack from "../../../public/tcg-card-back.jpg"
import cardFront from "../../../public/tcg-card-front.png"
import Image from "next/image"


export default function PokemonCard({pickedCard}: Readonly<{ pickedCard:number }>) {
    const cards = [1, 2, 3, 4, 5]
    console.debug(`Picked card is ${pickedCard}`)
    return (
        <div>
        <Grid container spacing = {2} justifyContent="center" alignItems="center" >
            {
                cards.map((number) => 
                    <Grid size={4} key={number}>
                        <Image
                            key = {number}
                            src = {
                                pickedCard === number ? cardFront : cardBack
                            }
                            alt = "Pokemon Card Back"
                            style = {{ maxWidth: "100%", height: "auto" }}
                        />
                    </Grid>
                )
            }
        </Grid>
        </div>
    )
}