import * as React from "react";

import { DropZone } from "../components/core/DropZone";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NavBar from "../components/core/NavBar";
import { Grid, Paper, Stack } from "@mui/material";
import Image from "next/image";
import { Container } from "@mui/system";

export default function playground({ text }) {
  return (
    <Container>
      <Stack justifyContent="center">
        <Grid container justifyContent="center" align="center" mt={3}>
          <Grid item xs={8}>
            <Paper>
              <Image
                src="https://res.cloudinary.com/xabi-api-cloud/image/upload/v1658455826/aveiysqydtdd5dzhfihx.gif"
                alt="imagen"
                width={500}
                height={500}
              />
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
