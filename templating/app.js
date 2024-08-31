import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// mengatur ejs sebagai view engine
app.set("view engine", "ejs");
// Middleware untuk mengatur folder views
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay;

  let type = "Belum Prei";
  let advice = "Kerja yang harder";
  if (day === 0 || day === 6) {
    type = "Holiday Coyy";
    advice = "Dolan sek jauhh";
  }
  let data = { dayType: type, adv: advice };
  res.render("index.ejs", data);
  // res.render("index.ejs", {
  //   dayType: type,
  //   adv: advice,
  // });
});

app.listen(port, (req, res) => {
  console.log("Server Running");
});
