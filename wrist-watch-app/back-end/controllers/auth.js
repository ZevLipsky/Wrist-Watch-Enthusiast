import db from "../config/database.js"

export const register = (req, res) => {
    //CHECK IF USER ALREADY EXISTS
    const q = "SELECT FROM users WHERE username = ?"

    db.query(q,[req.body.username], (err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User already exists")

    })


}


export const login = (req, res) => {

}


export const logout = (req, res) => {
    
}