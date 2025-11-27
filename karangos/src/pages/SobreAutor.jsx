import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Button, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MinhaFoto from "../assets/provafausto.PNG";

// Função para recuperar likes salvos
const carregarLikes = () => {
  const valor = localStorage.getItem("curtidasAutor");
  return valor ? parseInt(valor) : 0;
};

export default function SobreAutor() {
  const [curtidas, setCurtidas] = useState(carregarLikes);

  useEffect(() => {
    localStorage.setItem("curtidasAutor", curtidas);
  }, [curtidas]);

  const aumentarCurtida = () => setCurtidas((atual) => atual + 1);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>

      <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
Sobre autora
      </Typography>

      <Card sx={{ width: 420, borderRadius: 3, boxShadow: 5, overflow: "hidden" }}>

        <CardMedia
          component="img"
          image={MinhaFoto}
          height="260"
          sx={{ filter: "brightness(0.95)" }}
        />

        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
Andriele          </Typography>

          <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
           estudante de analise de sistemas
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<FavoriteIcon />}
            onClick={aumentarCurtida}
          >
            Curtidas: {curtidas}
          </Button>
        </CardContent>
      </Card>

    </Box>
  );
}
