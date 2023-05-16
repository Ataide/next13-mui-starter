"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { signIn } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";
import { infer as Infer, object, string } from "zod";

const schema = object({
  email: string().email("Digite um email válido."),
  password: string().min(4, "Precisa ter ao menos 4 caracteres."),
});

type CredentialsType = Infer<typeof schema>;

const theme = createTheme();

export default function SignIn() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsType>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: CredentialsType) => {
    const isLoggged = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/app",
    });

    console.log(isLoggged);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field: { ref, ...field } }) => (
                <TextField
                  variant="outlined"
                  label="Email"
                  margin="normal"
                  fullWidth
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  inputRef={ref}
                  {...field}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field: { ref, ...field } }) => (
                <TextField
                  variant="outlined"
                  label="Password"
                  margin="normal"
                  fullWidth
                  type="password"
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  inputRef={ref}
                  {...field}
                />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        <div>
          <pre>{JSON.stringify(errors)}</pre>
        </div>
      </Container>
    </ThemeProvider>
  );
}

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        IBase.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
