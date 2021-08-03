import createStripe from "stripe-client"

const stripe = createStripe(
    "pk_test_51H1IHZAeQxr5OAmthxyeGZakoiBI2mej7zsAQ3Zgqeo8h7y1TrvmNlVAS3z5brsa8zgO4PhsQZehTAcPUsiUGPmY00wcHMjGpD")

export const cardTokenRequest = (card) => (
    stripe.createToken({ card })
)

