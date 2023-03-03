import { Link, Stack, Typography } from "@mui/material";

interface ContactProps {
  readonly label: string,
  readonly contact: string,
  readonly href: string,
}

export function Contact(props: ContactProps) {
  return (
    <Stack 
      direction="column"
      spacing={2}
    >
      <Typography>
        {props.label}
      </Typography>
      <Link 
        color="text.secondary"
        href={props.href}
        sx={{
          marginBottom: 1
        }}  
      >
        {props.contact}
      </Link>
    </Stack>
  )
}