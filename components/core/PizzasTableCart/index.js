import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { QuantityPizza } from "../QuantityPizza";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

export default function PizzasTableCart({ pizzas }) {
  const subtotal = 0;
  pizzas?.map((pizza) => (subtotal += pizza.quantity * pizza.amount));
  const taxes = subtotal * TAX_RATE;
  const total = subtotal + taxes;

  console.log(pizzas);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Detalles
            </TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Descripcion</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Unidad</TableCell>
            <TableCell align="right">Suma</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pizzas?.map((pizza) => (
            <TableRow key={pizza.name}>
              <TableCell>{pizza.name}</TableCell>
              <TableCell align="right">
                <QuantityPizza quantity={pizza.quantity} />
              </TableCell>
              <TableCell align="right">{pizza.amount}</TableCell>
              <TableCell align="right">
                {ccyFormat(pizza.amount * pizza.quantity)}
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(subtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(taxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(total)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
