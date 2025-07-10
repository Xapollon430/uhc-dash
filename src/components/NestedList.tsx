import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { navData } from "../data/navData.ts";
import { SvgIconComponent } from "@mui/icons-material";

export type NavItem = {
  label: string;
  icon: SvgIconComponent;
  type?: string;
  children?: NavItem[];
};

type NestedListProps = {
  items?: NavItem[];
  onSelect: (item: NavItem, path: string[]) => void;
  selectedPath: string[];
  parentPath?: string[];
};

const NestedList: React.FC<NestedListProps> = ({
  items = navData,
  onSelect,
  selectedPath,
  parentPath = [],
}) => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const handleClick = (label: string) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <List component="nav" disablePadding>
      {items.map((item) => {
        const currentPath = [...parentPath, item.label];
        const isSelected =
          selectedPath.length === currentPath.length &&
          selectedPath.every((v, i) => v === currentPath[i]);
        return (
          <React.Fragment key={item.label}>
            <ListItemButton
              sx={{
                pl: 2 * (currentPath.length - 1),
                bgcolor: isSelected ? "#e3f2fd" : undefined,
              }}
              onClick={() => {
                if (item.type === "healthcare") {
                  handleClick(item.label);
                  onSelect(item, currentPath);
                } else if (item.type === "person") {
                  onSelect(item, currentPath);
                } else if (item.children && item.children.length > 0) {
                  handleClick(item.label);
                  onSelect(item, currentPath);
                }
              }}
              selected={isSelected}
            >
              <ListItemIcon>
                {(() => {
                  const iconMap: { [key: string]: React.ElementType } = {
                    Business: require("@mui/icons-material/Business").default,
                    Person: require("@mui/icons-material/Person").default,
                  };
                  const IconComponent = iconMap[item.icon] || null;
                  return IconComponent ? <IconComponent /> : null;
                })()}
              </ListItemIcon>
              <ListItemText primary={item.label} />
              {item.children ? (
                open[item.label] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItemButton>
            {item.children && (
              <Collapse in={open[item.label]} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2 }}>
                  <NestedList
                    items={item.children}
                    onSelect={onSelect}
                    selectedPath={selectedPath}
                    parentPath={currentPath}
                  />
                </Box>
              </Collapse>
            )}
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default NestedList;
