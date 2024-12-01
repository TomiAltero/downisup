import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Hijo } from "@/types";
import { getHijoProfile, getChildrenAndUser } from "@/lib/utils";

export async function ChildrenList({ token }: { token: string }) {
  if (!token) {
    return null;
  }

  const allChildren = await getChildrenAndUser({ token });
  const isType2User = allChildren.usuario.tipoUsuarioId === 2;
  const hijosArray = isType2User
    ? allChildren.hijos
    : await getHijoProfile({ token });
  const hijosData = Array.isArray(hijosArray) ? hijosArray : hijosArray.hijos;

  return (
    <div>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
          textAlign: "left",
          fontWeight: "bold",
          ml: 2,
        }}
        className="dark:text-white"
      >
        {isType2User ? "¿Con quién desea trabajar?" : "Mis Hijos"}
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent={{ xs: "center", sm: "flex-start" }} 
      >
        {hijosData.length === 0 ? (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ ml: 2 }}
            className="dark:text-white"
          >
            No tienes hijos registrados.
          </Typography>
        ) : (
          hijosData.map((hijo: Hijo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={hijo.id}>
              <Card
                sx={{
                  maxWidth: 350,
                  margin: { xs: "0 auto", sm: "0" }, 
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                className="dark:bg-gray-800 dark:text-white"
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
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="dark:text-white"
                  >
                    {hijo.nombre} {hijo.apellido}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="dark:text-gray-300"
                  >
                    Edad: {hijo.edad} años
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="dark:text-gray-300"
                  >
                    DNI: {hijo.dni}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href={
                      isType2User
                        ? `/application/formulario-medico/${hijo.id}`
                        : `/application/panel-medico/${hijo.id}`
                    }
                    passHref
                  >
                    <Button size="small" className="dark:text-blue-500">
                      Ver más
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}
