import { styled, SxProps, Theme } from "@mui/material"
import { ReactNode } from "react"

const StyledSection = styled('section')({})

export interface BaseSectionProps {
  readonly id?: string,
  readonly sx?: SxProps<Theme>
}

export interface SectionProps extends BaseSectionProps {
  readonly children?: ReactNode,
}

export function Section(props: SectionProps) {
  return (
    <StyledSection
      id={props.id}
      sx={{
        maxWidth: theme => theme.layoutMaxWidth?.section,
        margin: 'auto',
        marginTop: { xs: 0, md: 10 },
        paddingTop: { xs: 10, md: 10 },
        paddingInline: 4,
        ...props.sx
      }}
    >
      {props.children}
    </StyledSection>
  )
}