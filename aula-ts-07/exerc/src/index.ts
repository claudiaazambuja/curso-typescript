import express from "express"

const app = express()



app.get("/health", (req, res) => {
    res.status(200).send("Ok")
})


app.listen(5000, () => {
    console.log("server is running")
})

