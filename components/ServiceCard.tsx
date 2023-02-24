import { Box, Paper, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";

interface ServiceCardProps {
  readonly title: string;
  readonly description: string;
}

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Paper
      sx={{
        padding: 4,
        minHeight: 200,
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