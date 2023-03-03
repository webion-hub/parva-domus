import { Link, Stack, Typography } from "@mui/material";

export interface Contact {
  readonly label: string,
  readonly href: string,
}

interface ContactProps {
  readonly label: string,
  readonly contacts: Contact[],
}

export function ContactGroup(props: ContactProps) {
  return (
    <Stack 
      direction="column"
      spacing={2}
    >
      <Typography>
        {props.label}
      </Typography>
      <Stack
        direction="column"
        spacing={1}
      >
        {
          props.contacts.map((c, index) => (
            <Link
              key={index}
              color="text.secondary"
              noWrap
              href={c.href}
            >
              {c.label}
            </Link>
          ))
        }
      </Stack>
    </Stack>
  )
}