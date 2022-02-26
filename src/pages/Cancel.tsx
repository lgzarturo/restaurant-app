import { Button, Container, Paper, TextField, Typography } from "@material-ui/core"
import { useState } from "react"
import { cancelReservation } from "../api/restaurant"

const INFO = "Por favor, introduce tu código de reservación"
const SUCCESS = "Reservación cancelada"
const ERROR = "Error al cancelar la reservación"

const Cancel = () => {
  const [notification, setNotification] = useState(INFO)
  const [locator, setLocator] = useState("")
  const deleteReservation = async () => {
    try {
      const response = await cancelReservation(locator)
      console.log(response)
      setNotification(SUCCESS)
    } catch (error) {
      console.log(error)
      setNotification(ERROR)
    }
  }
  const handleSend = () => {
    deleteReservation()
  }
  return (
    <Container maxWidth="sm" style={{ paddingTop: "2em" }}>
      <Paper style={{ padding: "4em", height: "40vh" }}>
        <Typography variant="h4">Cancelar Reservación</Typography>
        <div>
          <TextField
            id=""
            label="Nombre"
            variant="outlined"
            value={locator}
            onChange={(e) => setLocator(e.target.value)}
            style={{ width: "100%", margin: "2em 0 1em 0" }}
          ></TextField>
          <Button variant="contained" color="primary" fullWidth onClick={handleSend}>Enviar</Button>
        </div>
        <Typography style={{ marginTop: "1em" }}>{notification}</Typography>
      </Paper>
    </Container>
  )
}

export default Cancel
