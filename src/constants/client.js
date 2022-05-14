import('dotenv/config')

export const PORT = process.env.PORTSERVER || 3001
console.log(">>PORT", PORT)

