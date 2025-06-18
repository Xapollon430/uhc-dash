import React from "react";
import { Box, Typography, Toolbar } from "@mui/material";
import { NavItem } from "./NestedList.tsx";
import Table from "./Table.tsx";

type MainContentProps = {
  selectedItem: NavItem | null;
  selectedPath: string[];
  onBreadcrumbClick: (path: string[]) => void;
  onSelect: (item: NavItem, path: string[]) => void;
};

const MainContent: React.FC<MainContentProps> = ({
  selectedItem,
  selectedPath,
  onBreadcrumbClick,
  onSelect,
}) => {
  // Only show table for providers
  const showTable = selectedItem && selectedItem.type === "person";
  // Show children for any node with children (division or healthcare center)
  const showChildrenList =
    selectedItem && selectedItem.children && selectedItem.children.length > 0;

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Box
        sx={{ mb: 2, display: "flex", alignItems: "center", flexWrap: "wrap" }}
      >
        <Typography
          sx={{ color: "#1976d2", cursor: "pointer", mr: 1 }}
          onClick={() => onBreadcrumbClick([])}
          component="span"
        >
          Home
        </Typography>
        {selectedPath.map((seg, idx) => (
          <React.Fragment key={seg + idx}>
            <Typography component="span" sx={{ mx: 1, color: "#1976d2" }}>
              /
            </Typography>
            <Typography
              component="span"
              sx={{
                color: idx === selectedPath.length - 1 ? "#1976d2" : "#1976d2",
                fontWeight: idx === selectedPath.length - 1 ? 700 : 400,
                cursor: idx === selectedPath.length - 1 ? "default" : "pointer",
                mr: 1,
                textDecoration:
                  idx === selectedPath.length - 1 ? "underline" : "none",
              }}
              onClick={() => {
                if (idx !== selectedPath.length - 1) {
                  onBreadcrumbClick(selectedPath.slice(0, idx + 1));
                }
              }}
            >
              {seg}
            </Typography>
          </React.Fragment>
        ))}
      </Box>
      {showTable ? (
        <Box sx={{ background: "#fff", p: 3, borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
            {selectedItem.label} Data
          </Typography>
          <Table
            autoHeightw
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </Box>
      ) : showChildrenList ? (
        <Box sx={{ background: "#fff", p: 3, borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
            {selectedItem.label}{" "}
            {selectedItem.type === "healthcare" ? "Providers" : "Descendants"}
          </Typography>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {selectedItem.children!.map((child) => (
              <li
                key={child.label}
                style={{
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => onSelect(child, [...selectedPath, child.label])}
              >
                {child.icon && (
                  <span style={{ marginRight: 8 }}>
                    {React.createElement(child.icon)}
                  </span>
                )}
                <span>{child.label}</span>
              </li>
            ))}
          </ul>
        </Box>
      ) : (
        <Box sx={{ background: "#fff", p: 3, borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6">Select a provider to view data.</Typography>
        </Box>
      )}
    </Box>
  );
};

export default MainContent;
