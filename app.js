const express = require("express")
const fs = require("fs")
const path = require("path")
let bodyParser = require("body-parser")

const app = express()
const IP = process.env.IP || "http://localhost:"
const PORT = process.env.PORT || 3000

// Body parser middleware
app.use(bodyParser.json({ limit: "300kb" }))

// Routes
app.post("/saveFile", (req, res) => {
	if (req.body && req.body.fileName && req.body.buffer) {
		fs.writeFile(`./logs/${req.body.fileName}`, Buffer.from(req.body.buffer), function (err) {
			if (err) throw err
			console.log("Saved!")
		})
		return res.json({ status: "100" })
	} else {
		return res.json({ status: "500" })
	}
})

// Set static folder
app.use("/", express.static(path.join(__dirname + "/logs")))

// 404 Error
app.use(function (req, res) {
	res.status(400)
	return res.send("404 Error: Page not found!")
})

// Listen on port 3000
app.listen(PORT, () => {
	console.log(`Server is running on ${IP}${PORT}`)
})
