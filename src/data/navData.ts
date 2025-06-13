import { LocationOn, Business, Person } from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";

export type NavDataItem = {
  label: string;
  icon: SvgIconComponent;
  type?: string;
  children?: NavDataItem[];
};

export const navData: NavDataItem[] = [
  {
    label: "North Carolina",
    icon: LocationOn,

    children: [
      {
        label: "NC-D1",
        icon: Business,
        children: [
          {
            label: "Alamance Health Care Center",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Christeen Jefferson", icon: Person, type: "person" },
              { label: "Donna Mu", icon: Person, type: "person" },
              { label: "Neil Schwartzman", icon: Person, type: "person" },
            ],
          },
          {
            label: "Guilford Health Care Center",
            icon: Business,
            type: "healthcare",
          },
          {
            label: "Lexington Health Care Center",
            icon: Business,
            type: "healthcare",
          },
          { label: "Piedmont", icon: Business, type: "healthcare" },
        ],
      },
      { label: "NC-D2", icon: Business },
      { label: "NC-D3", icon: Business },
      { label: "NC-D5", icon: Business },
    ],
  },
  {
    label: "Virginia",
    icon: LocationOn,
  },
];
