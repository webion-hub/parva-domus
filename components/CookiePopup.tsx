import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export interface State extends SnackbarOrigin {
  readonly open: boolean;
}

export function CookiePopup() {
  const [open, setOpen] = useState<boolean>(false);
  const name = 'parva-privacy-cookie'

  useEffect(() => {
    const got = Cookies.get(name);
    if (got) return;

    setOpen(true);
  }, []);

  const handleClick = async () => {
    Cookies.set(name, 'true', { expires: 365, secure: true });
    setOpen(false);
  };

  const handleClose = async () => {
    Cookies.set(name, 'false', { expires: 365, secure: true });
    setOpen(false);
  };

  const action = (
    <Stack direction="row" spacing={1}>
      <Button
        onClick={handleClose}
        color="inherit"
        size="small"
        sx={{ transform: 'scale(0.8)' }}
      >
        Rifiuta
      </Button>
      <Button
        onClick={handleClick}
        color="primary"
        variant="contained"
        size="small"
      >
        Accetta
      </Button>
    </Stack>
  );

  return (
    <Snackbar
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom',
      }}
      open={open}
      TransitionComponent={Slide}
    >
      <Alert severity="info">
        <Typography variant="caption">
          <Stack direction="column" alignItems="flex-end" spacing={1}>
            Questo sito utilizza i cookie per migliorare la tua esperienza.
            <br />
            <Stack direction="row" sx={{ width: '100%' }}>
              <Link
                color="info.contrastText"
                href="/privacy"
                target="_blank"
              >
                Informativa della privacy
              </Link>
            </Stack>
            {action}
          </Stack>
        </Typography>
      </Alert>
    </Snackbar>
  );
}
