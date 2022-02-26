import { Button, createStyles, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Theme, Typography } from "@material-ui/core"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { useState } from "react"
import { ReservationModel } from "../models/reservationModel"
import { TurnModel } from "../models/restaurantDetailModel"
import { createReservation } from "../api/restaurant"
import { useParams } from "react-router-dom"
import { DialogInfo } from "../components"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
)

const currentDate = new Date()
const initialCreateReservation: ReservationModel = {
  date: currentDate.toISOString(),
  email: '',
  name: '',
  person: 0,
  restaurantId: 0,
  turnId: 0
}

interface Props {
  turns: TurnModel[]
}

export const Form = ({ turns }: Props) => {
  const classes = useStyles()
  const [editedReservation, setEditedReservation] = useState<ReservationModel>
  (initialCreateReservation)
  const [isAccepted, setIsAccepted] = useState<boolean>(false)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [reservationCode, setReservationCode] = useState<string>('')
  const { restaurantId } = useParams<any>();

  const handleSelectChange = (e: any) => {
    setEditedReservation({ ...editedReservation, turnId: e.target.value })
  }
  const isInvalid = {
    name: isAccepted && editedReservation.name === '',
    email: isAccepted && editedReservation.email === '',
    person: isAccepted && editedReservation.person <= 0,
    turnId: isAccepted && editedReservation.turnId <= 0,
    date: isAccepted &&
      (editedReservation.date === null || editedReservation.date?.toString() === 'Invalid Date'),
  }

  const isFormValid = () => {
    const isValid = Object.values(isInvalid).findIndex((value) => value) === -1
    return isValid
  }

  const saveReservation = async () => {
    try {
      const id = Number(restaurantId)
      const response = await createReservation({ ...editedReservation, restaurantId: id })
      if (response.code === 200) {
        setReservationCode(response.data)
        setOpenDialog(true)
      } else {
        console.error(response.message)
        setReservationCode('No se pudo crear la reserva.')
        setOpenDialog(true)
      }
    } catch (err) {
      console.error(err)
      setReservationCode('No se pudo crear la reserva.')
      setOpenDialog(true)
    }
  }

  const handleSave = () => {
    setIsAccepted(true)
    if (isFormValid()) {
      saveReservation()
    }
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setReservationCode('')
  }

  return (
    <Paper style={{ padding: "1em" }}>
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h6">Realiza tu reserva</Typography>
        <TextField
          id="standard-basic"
          label="Name"
          value={editedReservation.name}
          onChange={e => setEditedReservation({ ...editedReservation, name: e.target.value })}
          error={isInvalid.name}
        />
        <TextField
          id="standard-basic"
          label="Email"
          value={editedReservation.email}
          onChange={e => setEditedReservation({ ...editedReservation, email: e.target.value })}
          error={isInvalid.email}
        />
        <TextField
          id="standard-basic"
          label="People"
          value={editedReservation.person}
          type="number"
          onChange={e => setEditedReservation({ ...editedReservation, person: +e.target.value })}
          error={isInvalid.person}
        />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justifyContent="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date"
              format="dd/MM/yyyy"
              value={editedReservation.date}
              onChange={(date: any) => setEditedReservation({ ...editedReservation, date })}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              error={isInvalid.date}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Turno</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="turn"
            value={editedReservation.turnId}
            onChange={handleSelectChange}
            error={isInvalid.turnId}
          >
            <MenuItem value={0}>Seleccionar una opción</MenuItem>
            {turns.map(turn => <MenuItem key={turn.id} value={turn.id}>{turn.name}</MenuItem>)}
          </Select>
        </FormControl>
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1em' }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Reservar
          </Button>
        </div>
      </form>
      <DialogInfo open={openDialog} title="Código de reservación" info={reservationCode} onClose={handleCloseDialog}  />
    </Paper>
  )
}
