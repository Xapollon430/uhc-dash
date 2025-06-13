import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableData, tableMonths } from "../data/fakeTableData.ts";

// Map colorGroup to background color
const colorMap: Record<string, string> = {
  yellow: "#FFF9C4",
  orange: "#FFE0B2",
  grey: "#E0E0E0",
  blue: "#B3E5FC",
  green: "#C8E6C9",
  pink: "#F8BBD0",
};

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function FinancialKpiTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: 2, borderRadius: 2, maxWidth: 1200 }}
    >
      <Table aria-label="financial performance table" size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700, fontSize: 15, minWidth: 180 }}>
              Code/Description
            </TableCell>
            {tableMonths.map((month) => (
              <TableCell
                key={month}
                align="center"
                sx={{
                  fontWeight: 700,
                  fontSize: 15,
                  minWidth: 90,
                  background:
                    month === "Totals"
                      ? "#D3D3D3"
                      : month === "Coding %"
                      ? "#E1A9E2"
                      : undefined,
                }}
              >
                {month}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, idx) => {
            if (row.type === "section") {
              return (
                <TableRow
                  key={row.label + idx}
                  style={{ background: colorMap[row.colorGroup] || undefined }}
                >
                  <TableCell
                    colSpan={tableMonths.length + 1}
                    sx={{ fontWeight: 700, fontSize: 15 }}
                  >
                    {row.label}
                  </TableCell>
                </TableRow>
              );
            }
            // Data or Total row
            const bg =
              row.type === "total"
                ? colorMap[row.colorGroup] || undefined
                : "#fff";
            return (
              <TableRow
                key={(row.code || row.label || "row") + idx}
                style={{ background: bg }}
              >
                <TableCell
                  sx={{
                    fontWeight: row.type === "total" ? 700 : 500,
                    fontSize: 14,
                  }}
                >
                  {row.code ? row.code : row.label}
                </TableCell>
                {row.values.map((val: any, i: number) => (
                  <TableCell
                    key={i}
                    align="center"
                    sx={{ fontWeight: row.type === "total" ? 700 : 400 }}
                  >
                    {row.isCurrency && val ? formatCurrency(val) : val}
                  </TableCell>
                ))}
                {/* Totals column (grey) */}
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: row.type === "total" ? 700 : 400,
                    background: "#D3D3D3",
                  }}
                >
                  {row.isCurrency && row.total
                    ? formatCurrency(row.total)
                    : row.total}
                </TableCell>
                {/* Coding % column (colored) */}
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: row.type === "total" ? 700 : 400,
                    background: "#E1A9E2",
                  }}
                >
                  {row.coding}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
