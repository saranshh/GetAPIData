const express = require("express")
const app = express()
const cors = require("cors")
const axios = require("axios")
const PORT = 3000

app.use(cors());

app.get("/users", ( async (req, res) => {
    try {
        const [userData] = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/users")]);
        
        const data = userData.data.map(user => ({ 
            ...user
        }));
        console.log(data);
        res.send(data);
    } 
    catch (e) {
        console.log(e);
    }
}))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
