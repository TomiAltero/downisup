const path = require("path");

require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const usersRoutes = require("./routes/usersRoutes");
const childrenRoutes = require("./routes/childrenRoutes");
const medicalData = require("./routes/medicalDataRoutes")
const sendEmail = require("./routes/contactRoutes");
const sendResetCode = require("./routes/resetPasswordRoutes");
const turnosRoute = require('./routes/turnos');

const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡El servidor está funcionando correctamente!");
});

app.use("/api/usuarios", usersRoutes);
app.use("/api/hijos", childrenRoutes);
app.use("/api/medicalData",medicalData);
app.use("/api/mail", sendEmail);
app.use("/api/mail/reset-password", sendResetCode);
app.use('/api/turnos', turnosRoute);


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

sequelize
  .sync()
  .then(() => {
    console.log("Base de datos y modelos sincronizados.");
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });

console.log("Token Secret:", process.env.TOKEN_SECRET);
