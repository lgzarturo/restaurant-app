import { Box, CircularProgress, Typography } from "@material-ui/core"
import { ReactElement } from "react"

interface Props {
  status: 'loading' | 'success' | 'error'
  children: ReactElement
}

export const HandleStatus = ({status, children}: Props) => {
  if (status === 'loading') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </div>
    )
  }
  if (status === 'error') {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography style={{ padding: '0.5em' }} variant="button"><b>Error obteniendo datos</b></Typography>
      </div>
    )
  }
  if (status === 'success') {
    return <Box>{children}</Box>
  }
  return null
}
