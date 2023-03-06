import { Typography, TypographyProps } from "@mui/material"
import { ReactNode } from "react"

interface SectionTitleProps extends TypographyProps {
  readonly children: ReactNode
}

export function SectionTitle(props: SectionTitleProps) {
  const {
    children,
    sx,
    ...others
  } = props

  return (
    <Typography
      variant="h4" 
      color="primary"
      {...others}
      sx={{
        marginBottom: { xs: 4, md: 8},
        ...sx
      }}
    >
      {children}
    </Typography>
  )
}