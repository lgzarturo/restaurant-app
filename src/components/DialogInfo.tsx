import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { DialogContent, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: '0.5em',
    marginBottom: '1em',
  },
});

export interface DialogInfoProps {
  open: boolean
  title: string
  info: string
  onClose: () => void
}

export const DialogInfo = (props: DialogInfoProps) => {
  const classes = useStyles();
  const { onClose, title, info, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <Typography className={classes.root}>{info}</Typography>
      </DialogContent>
    </Dialog>
  );
}
