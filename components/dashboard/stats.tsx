"use client"
import { CardContent, Typography, Card, CardActions, Button, Grid } from "@mui/material";

interface StatsProps {
  size: number;
  linkButtonRef?: string;
  statsContent?: React.ReactNode;
  title: string;
  value?: string;
  description?: string;
  showActions?: boolean;
}

export function Stats({size, linkButtonRef, statsContent, title, value, description, showActions=false} : StatsProps) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}> <Typography> Dashboard </Typography> </Grid>
        
        <Grid item xs={2}>
          <Card sx={{ minWidth: 275 }} className="text-center">
            <CardContent>
              { statsContent ? statsContent : (
                <>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="h3" component="div"> {value} </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {description}
                  </Typography>
                </>
              )}
            </CardContent>
            {showActions && (
              <CardActions>
                <Button size="small">Gerenciar</Button>
              </CardActions>
            )}
          </Card>
        </Grid>
      </Grid>
    </>
  )
}