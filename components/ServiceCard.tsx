import { Box, Paper, Stack, Typography } from "@mui/material";
import { ReactNode, useRef, useState } from "react";

interface ServiceCardProps {
  readonly title: string;
  readonly description: string | ReactNode;
}

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Paper
      sx={{
        padding: 4,
        minHeight: 260,
      }}
    >
      <Stack
        direction="column"
        spacing={2}
      > 
        <Typography 
          variant="h6" 
          color="text.primary"
        >
          {props.title}
        </Typography>
        <Typography 
          color="text.secondary"
        >
          {props.description}
        </Typography>
      </Stack>
    </Paper>
  )
}