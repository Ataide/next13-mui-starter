"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

interface StatsProps {
  size: number;
  linkButtonRef?: string;
  statsContent?: React.ReactNode;
  title: string;
  value?: string;
  description?: string;
  showActions?: boolean;
}

export function Stats({
  size,
  linkButtonRef,
  statsContent,
  title,
  value,
  description,
  showActions = false,
}: StatsProps) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {" "}
          <Typography> Dashboard </Typography>{" "}
        </Grid>

        <Grid item xs={2}>
          <Card sx={{ minWidth: 275, textAlign: "center" }}>
            <CardContent>
              {statsContent ? (
                statsContent
              ) : (
                <>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {title}
                  </Typography>
                  <Typography variant="h3" component="div">
                    {" "}
                    {value}{" "}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                  </Typography>
                </>
              )}
            </CardContent>
            {showActions && (
              <CardActions sx={{ textAlign: "center" }}>
                <Link href={"/app/administracao/users/create"}>
                  <Button size="small">Gerenciar</Button>
                </Link>
              </CardActions>
            )}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
