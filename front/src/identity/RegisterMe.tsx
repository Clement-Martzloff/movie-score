import { useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";

import { IdentityService } from "./identityService.ts";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 400,
    margin: `${theme.spacing(0)} auto`,
  },
  card: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
}));

export default function RegisterMe() {
  const classes = useStyles();
  const { push } = useHistory();
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <form
      className={classes.container}
      onSubmit={registerUser}
      noValidate
      autoComplete="off"
    >
      <Card className={classes.card}>
        <CardHeader title="Sign up" />
        <CardContent>
          <div>
            <TextField
              required
              fullWidth
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={updateForm}
              label={"Email"}
              placeholder={"e.g email"}
            />
            <TextField
              required
              fullWidth
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={updateForm}
              className={classes.marginTop}
              label={"Password"}
              placeholder={"e.g password"}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button color="primary" type="submit">
            Sign up
          </Button>
        </CardActions>
      </Card>
    </form>
  );

  async function registerUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.email && form.password) {
      await IdentityService.signup({
        email: form.email,
        password: form.password,
      });
      push("/signin");
    }
  }

  function updateForm(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name, value } = event.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
}
