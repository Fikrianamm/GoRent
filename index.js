import express from "express";
import { categories, products } from "./data.js";

const app = express();
const port = 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
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

  const filteredProducts = products.filter((p)=>p.id != productId)

  res.render("detailProduk.ejs", {
    products: filteredProducts,
    product,
    categories,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
