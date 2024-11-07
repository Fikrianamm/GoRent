import express from "express";
import { fileURLToPath } from "url"; 
import { categories, products } from "./data.js";

const app = express();
const port = 3000;

// Define __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));

// Set EJS as templating engine
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {S
  res.render("home.ejs", { products, categories });
});

app.get("/signin", (req, res) => {
  res.render("signin.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.get("/:productId", (req, res) => {
  const productId = req.params.productId;

  const product = products.find((p) => p.id == productId);

  if (!product) {
    return res.status(404).render("error.ejs", {
      errorTitle: "Halaman Tidak Ditemukan",
      errorMessage:
        "Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke halaman utama.",
    });
  }

  res.render("detailProduk.ejs", {
    product,
    categories,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});