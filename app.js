const express = require("express")
const fs = require("fs")
const path = require("path")
let bodyParser = require("body-parser")

const app = express()
const IP = process.env.IP || "http://localhost:"
const PORT = process.env.PORT || 3000

const colors = {
	red: "\x1b[31m",
	green: "\x1b[32m",
	yellow: "\x1b[33m",
	blue: "\x1b[34m",
	magenta: "\x1b[35m",
	cyan: "\x1b[36m",
	reset: "\x1b[0m",
}

// Body parser middleware
app.use(bodyParser.json({ limit: "300kb" }))

// Routes
app.post("/saveFile", (req, res) => {
	if (req.body && req.body.fileName && req.body.buffer) {
		fs.writeFile(`./logs/${req.body.fileName}`, Buffer.from(req.body.buffer), function (err) {
			if (err) throw err
			console.log(`💾 File ${colors.blue}${req.body.fileName} ${colors.green}Saved!`, colors.reset)
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
	console.log(colors.green, `🚀 Server is running on ${colors.cyan}${IP}${PORT}`, colors.reset)
})
