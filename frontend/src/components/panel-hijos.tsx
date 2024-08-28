"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Hijo } from "@/types";
import { getHijoProfile } from "@/lib/utils";

export async function PanelHijo({ token }: { token: string }) {
  if (!token) {
    return null;
  }

  const { hijos } = await getHijoProfile({ token });

  return (
    <div className="flex flex-wrap">
      {hijos.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No tienes hijos registrados.
        </Typography>
      ) : (
        hijos.map((hijo: Hijo) => (
          <div key={hijo.id} className="mb-4">
            <Card
              sx={{
                width: 350,
                borderRadius: 4,
                margin: 2,
                display: "flex",
                flexDirection: "column",
                height: "400px",
              }}
            >
              <div
                style={{
                  height: 300,
                  overflow: "hidden",
                  borderRadius: "4px 4px 0 0",
                }}
              >
                {hijo.imagen ? (
                  <CardMedia
                    component="img"
                    image={hijo.imagen}
                    alt={`${hijo.nombre} ${hijo.apellido}`}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      backgroundColor: "#f3f4f6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      No hay foto disponible
                    </Typography>
                  </div>
                )}
              </div>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {hijo.nombre} {hijo.apellido}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Edad: {hijo.edad} años
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  DNI: {hijo.dni}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/application/panel-medico/${hijo.id}`} passHref>
                  <Button size="small">
                    Ver más
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        ))
      )}
    </div>
  );
}

