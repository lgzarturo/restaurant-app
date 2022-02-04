import { createStyles, makeStyles, Paper, TextField, Theme, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
)

export const Form = () => {
  const classes = useStyles();
  return (
    <Paper style={{ padding: "2em" }}>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h5">Realiza tu reserva</Typography>
        <TextField id="standard-basic" label="Name" />
        <TextField id="standard-basic" label="Email" />
        <TextField id="standard-basic" label="People" />
        <TextField id="standard-basic" label="Date" />
        <TextField id="standard-basic" label="Turn" />
      </form>
    </Paper>
  )
}
