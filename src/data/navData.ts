import { LocationOn, Business, Person } from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";
import { printFacilityNames } from "../utils/loader";

export type NavDataItem = {
  label: string;
  icon: string;
  type?: string;
  children?: NavDataItem[];
};

// console.log(printFacilityNames());

export const navData: NavDataItem[] = [
  {
    label: "RUNK \u0026 PRATT-LEESVILLE",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Bridgette Smoot",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "WAVERLY REHABILITATION",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Jennifer Davis",
        icon: "Person",
        type: "person",
      },
      {
        label: "Angelia Moore",
        icon: "Person",
        type: "person",
      },
      {
        label: "Natasha Estep",
        icon: "Person",
        type: "person",
      },
      {
        label: "Katrina Griffin",
        icon: "Person",
        type: "person",
      },
      {
        label: "Pamela Scholl",
        icon: "Person",
        type: "person",
      },
      {
        label: "Khoi Nguyen",
        icon: "Person",
        type: "person",
      },
      {
        label: "Linda Brown-Trudel",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jennifer Horne",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "ALAMANCE HEALTH CARE CENTER",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Christeen Jefferson",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jingwen Mu",
        icon: "Person",
        type: "person",
      },
      {
        label: "Amina Santali",
        icon: "Person",
        type: "person",
      },
      {
        label: "Dawn Shire Crawford",
        icon: "Person",
        type: "person",
      },
      {
        label: "Neil Schwartzman",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "HIGHLAND RIDGE REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Jill Garrett",
        icon: "Person",
        type: "person",
      },
      {
        label: "Amy Reedy",
        icon: "Person",
        type: "person",
      },
      {
        label: "Gene Bailey Jr.",
        icon: "Person",
        type: "person",
      },
      {
        label: "Timothy Mckernan",
        icon: "Person",
        type: "person",
      },
      {
        label: "Miranda Fields",
        icon: "Person",
        type: "person",
      },
      {
        label: "Rebecca Green",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "GATES HEALTH AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Sandra Kolb",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jayme Kressen",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jacqueline Griffin",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "CONSULATE HEALTH CARE OF WOODSTOCK",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Allison Young Smith",
        icon: "Person",
        type: "person",
      },
      {
        label: "Syed Ishaq",
        icon: "Person",
        type: "person",
      },
      {
        label: "Tiffany English",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "PEAK RESOURCES OUTER BANKS",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Saree Allen",
        icon: "Person",
        type: "person",
      },
      {
        label: "Kreig Spahn",
        icon: "Person",
        type: "person",
      },
      {
        label: "Craig Hayek",
        icon: "Person",
        type: "person",
      },
      {
        label: "Kara Waldrop",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "OAKWOOD MANOR",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Kayla Tomlin",
        icon: "Person",
        type: "person",
      },
      {
        label: "Alfonso Brochero",
        icon: "Person",
        type: "person",
      },
      {
        label: "Kira Derby",
        icon: "Person",
        type: "person",
      },
      {
        label: "Bridgette Smoot",
        icon: "Person",
        type: "person",
      },
      {
        label: "Cody Hughes",
        icon: "Person",
        type: "person",
      },
      {
        label: "Christie York",
        icon: "Person",
        type: "person",
      },
      {
        label: "Anthony Slonim",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "CHASE CITY HEALTH \u0026 REHAB CENTER",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "April Ruffin",
        icon: "Person",
        type: "person",
      },
      {
        label: "Lori Fuquay",
        icon: "Person",
        type: "person",
      },
      {
        label: "Amy Daniels",
        icon: "Person",
        type: "person",
      },
      {
        label: "Alfonso Brochero",
        icon: "Person",
        type: "person",
      },
      {
        label: "Cathy Arney",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "COURTLAND REHAB AND HEALTHCARE",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Jennifer Horne",
        icon: "Person",
        type: "person",
      },
      {
        label: "Linda Brown-Trudel",
        icon: "Person",
        type: "person",
      },
      {
        label: "Khoi Nguyen",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "RIVERSIDE HEALTH AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Daleen Lewis",
        icon: "Person",
        type: "person",
      },
      {
        label: "Neil Schwartzman",
        icon: "Person",
        type: "person",
      },
      {
        label: "Lisa Coleman",
        icon: "Person",
        type: "person",
      },
      {
        label: "Diane Blair",
        icon: "Person",
        type: "person",
      },
      {
        label: "Charles Moon",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "AHOSKIE HEALTH AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "May Anderson",
        icon: "Person",
        type: "person",
      },
      {
        label: "Ellen Landreth",
        icon: "Person",
        type: "person",
      },
      {
        label: "Cathy Arney",
        icon: "Person",
        type: "person",
      },
      {
        label: "Sandra Kolb",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "DEER MEADOWS REHABILITATION",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Megan Osborne",
        icon: "Person",
        type: "person",
      },
      {
        label: "Karen Vickers",
        icon: "Person",
        type: "person",
      },
      {
        label: "Tracy Goen",
        icon: "Person",
        type: "person",
      },
      {
        label: "Natasha Estep",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "HERTFORD REHABILITATION AND HC",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Jayme Kressen",
        icon: "Person",
        type: "person",
      },
      {
        label: "Sandra Kolb",
        icon: "Person",
        type: "person",
      },
      {
        label: "Cathy Arney",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "RADFORD HEALTH \u0026 REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Rebecca Green",
        icon: "Person",
        type: "person",
      },
      {
        label: "Timothy Mckernan",
        icon: "Person",
        type: "person",
      },
      {
        label: "Benjamin Davis",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "KENANSVILLE REHAB AND HEALTHCARE",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Isai Cruz",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "HERITAGE GREEN",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Bridgette Smoot",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "RIDGECREST MANOR NURSING AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Andrew Barlow",
        icon: "Person",
        type: "person",
      },
      {
        label: "Natasha Estep",
        icon: "Person",
        type: "person",
      },
      {
        label: "Miranda Fields",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "GUILFORD HEALTH CARE CENTER",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Kimberly Williams",
        icon: "Person",
        type: "person",
      },
      {
        label: "Crystal Moss",
        icon: "Person",
        type: "person",
      },
      {
        label: "Dawn Shire Crawford",
        icon: "Person",
        type: "person",
      },
      {
        label: "Neil Schwartzman",
        icon: "Person",
        type: "person",
      },
      {
        label: "Cristin Bradley",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "NORTHERN NECK-ALF",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Sarah Wells",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "WATERVIEW HEALTH \u0026 REHAB CENTER",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Taneisha Gayles",
        icon: "Person",
        type: "person",
      },
      {
        label: "Tiffany Curry",
        icon: "Person",
        type: "person",
      },
      {
        label: "Michael T Williams",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "WINDSOR REHABILITATION",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Sandra Kolb",
        icon: "Person",
        type: "person",
      },
      {
        label: "Cathy Arney",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jayme Kressen",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "BEDFORD COUNTY NURSING HOME",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Bridgette Smoot",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "SHENANDOAH VALLEY HEALTH",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Kimaka Bowens",
        icon: "Person",
        type: "person",
      },
      {
        label: "Charles Welly",
        icon: "Person",
        type: "person",
      },
      {
        label: "Natasha Estep",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jill Garrett",
        icon: "Person",
        type: "person",
      },
      {
        label: "Pamela Scholl",
        icon: "Person",
        type: "person",
      },
      {
        label: "Lori Beucler",
        icon: "Person",
        type: "person",
      },
      {
        label: "Monica Baldwin",
        icon: "Person",
        type: "person",
      },
      {
        label: "Tiffany Curry",
        icon: "Person",
        type: "person",
      },
      {
        label: "Amy Reedy",
        icon: "Person",
        type: "person",
      },
      {
        label: "Tiffany English",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "Clayton Rehab and Healthcare Center",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Sherlene Blackwood",
        icon: "Person",
        type: "person",
      },
      {
        label: "Trixy Headden",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "WINCHESTER HEALTH AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Syed Ishaq",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "STANLEYTOWN HEALTH AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Krystal Woodson",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jenna Holt",
        icon: "Person",
        type: "person",
      },
      {
        label: "Anthony Patriarco",
        icon: "Person",
        type: "person",
      },
      {
        label: "Gene Bailey Jr.",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "RUNK \u0026 PRATT- PEARL OF LIFE",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Bridgette Smoot",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "Piedmont Health and Rehab",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Desirae Downs",
        icon: "Person",
        type: "person",
      },
      {
        label: "Neil Schwartzman",
        icon: "Person",
        type: "person",
      },
      {
        label: "Trixy Headden",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "RUNK \u0026 PRATT- SMITH MOUNTAIN LAKE",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Bridgette Smoot",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "WESTMORELAND HEALTHCARE CENTER",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Abdul Kawa",
        icon: "Person",
        type: "person",
      },
      {
        label: "Gina Martin",
        icon: "Person",
        type: "person",
      },
      {
        label: "John Reed-Hill Gilstad",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "WILSON HEALTHCARE AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Ila Mckenzie",
        icon: "Person",
        type: "person",
      },
      {
        label: "Tennillya Pearce",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "RUNK AND PRATT AT WILLOW RIDGE",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Bridgette Smoot",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "MOUNTAIN LAUREL",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Timothy Mckernan",
        icon: "Person",
        type: "person",
      },
      {
        label: "James Bates",
        icon: "Person",
        type: "person",
      },
      {
        label: "Megan Osborne",
        icon: "Person",
        type: "person",
      },
      {
        label: "Deborah Parsons",
        icon: "Person",
        type: "person",
      },
      {
        label: "Mariana Herrera",
        icon: "Person",
        type: "person",
      },
      {
        label: "Alfonso Brochero",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "HARMONY PARK AT WILSON",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Ila Mckenzie",
        icon: "Person",
        type: "person",
      },
      {
        label: "Cathy Arney",
        icon: "Person",
        type: "person",
      },
      {
        label: "Tennillya Pearce",
        icon: "Person",
        type: "person",
      },
      {
        label: "Trixy Headden",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "HOLLY MANOR",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Shanthi Rondot",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jennifer Davis",
        icon: "Person",
        type: "person",
      },
      {
        label: "April Ruffin",
        icon: "Person",
        type: "person",
      },
      {
        label: "Alfonso Brochero",
        icon: "Person",
        type: "person",
      },
      {
        label: "Molly Vaughan",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "PINEY FOREST HEALTH AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Tammi Hampton",
        icon: "Person",
        type: "person",
      },
      {
        label: "Amanda Crews",
        icon: "Person",
        type: "person",
      },
      {
        label: "Neil Schwartzman",
        icon: "Person",
        type: "person",
      },
      {
        label: "Lori Fuquay",
        icon: "Person",
        type: "person",
      },
      {
        label: "Lisa Coleman",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "LEXINGTON HEALTH CARE CENTER",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Neil Schwartzman",
        icon: "Person",
        type: "person",
      },
      {
        label: "Berna Jean Besana-Mirafuente",
        icon: "Person",
        type: "person",
      },
      {
        label: "Meladie Mitchell",
        icon: "Person",
        type: "person",
      },
      {
        label: "Dawn Shire Crawford",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "LAUREL PARK REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Ellen Landreth",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jayme Kressen",
        icon: "Person",
        type: "person",
      },
      {
        label: "Cathy Arney",
        icon: "Person",
        type: "person",
      },
      {
        label: "Shelly Bass",
        icon: "Person",
        type: "person",
      },
      {
        label: "Kara Waldrop",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "WOODLANDS HEALTH \u0026 REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Pamela Scholl",
        icon: "Person",
        type: "person",
      },
      {
        label: "Charles Welly",
        icon: "Person",
        type: "person",
      },
      {
        label: "Kimaka Bowens",
        icon: "Person",
        type: "person",
      },
      {
        label: "Shanthi Rondot",
        icon: "Person",
        type: "person",
      },
      {
        label: "Mary Slagle",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "VALLEY HEALTH CARE CENTER",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Jeremy Whited",
        icon: "Person",
        type: "person",
      },
      {
        label: "Kelli Lane",
        icon: "Person",
        type: "person",
      },
      {
        label: "Tracy Goen",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "RUNK \u0026 PRATT- FOREST",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Bridgette Smoot",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "GUGGENHEIMER HEALTH AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Wallisa Vaughn",
        icon: "Person",
        type: "person",
      },
      {
        label: "Mariana Herrera",
        icon: "Person",
        type: "person",
      },
      {
        label: "Mitchell Guanzon",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "LIFE CARE CENTER OF NEW MARKET",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Tiffany English",
        icon: "Person",
        type: "person",
      },
      {
        label: "Syed Ishaq",
        icon: "Person",
        type: "person",
      },
      {
        label: "Lisa Reedy",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "SALEM HEALTH \u0026 REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Isabelle Tubbs",
        icon: "Person",
        type: "person",
      },
      {
        label: "Indre Malaiskaite",
        icon: "Person",
        type: "person",
      },
      {
        label: "Elizabeth Draper",
        icon: "Person",
        type: "person",
      },
      {
        label: "Benjamin Davis",
        icon: "Person",
        type: "person",
      },
      {
        label: "Tiffany Douglas",
        icon: "Person",
        type: "person",
      },
      {
        label: "Laszlo Vecsei",
        icon: "Person",
        type: "person",
      },
      {
        label: "Mariana Herrera",
        icon: "Person",
        type: "person",
      },
      {
        label: "Molly Vaughan",
        icon: "Person",
        type: "person",
      },
      {
        label: "Rebecca Green",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "Autumn Care of Madison",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Lori Beucler",
        icon: "Person",
        type: "person",
      },
      {
        label: "Pamela Scholl",
        icon: "Person",
        type: "person",
      },
      {
        label: "Natasha Estep",
        icon: "Person",
        type: "person",
      },
      {
        label: "Syed Ishaq",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "GATES-ALF",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Jayme Kressen",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jacqueline Griffin",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "NOVA HEALTH AND REHAB CENTER",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Natasha Estep",
        icon: "Person",
        type: "person",
      },
      {
        label: "Andrew Barlow",
        icon: "Person",
        type: "person",
      },
      {
        label: "Miranda Fields",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "ELIZABETH CITY HEALTH AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Kara Waldrop",
        icon: "Person",
        type: "person",
      },
      {
        label: "Ellen Landreth",
        icon: "Person",
        type: "person",
      },
      {
        label: "Craig Hayek",
        icon: "Person",
        type: "person",
      },
      {
        label: "Sherlene Blackwood",
        icon: "Person",
        type: "person",
      },
      {
        label: "May Anderson",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "HERITAGE HALL OF BLACKSBURG",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "James Bates",
        icon: "Person",
        type: "person",
      },
      {
        label: "Amy Reedy",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jill Garrett",
        icon: "Person",
        type: "person",
      },
      {
        label: "Benjamin Davis",
        icon: "Person",
        type: "person",
      },
      {
        label: "Natasha Estep",
        icon: "Person",
        type: "person",
      },
      {
        label: "Miranda Fields",
        icon: "Person",
        type: "person",
      },
      {
        label: "Pamela Scholl",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "NORTHERN NECK SENIOR CARE COMMUNITY",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Linda Brown-Trudel",
        icon: "Person",
        type: "person",
      },
      {
        label: "Sarah Wells",
        icon: "Person",
        type: "person",
      },
      {
        label: "Pamela Scholl",
        icon: "Person",
        type: "person",
      },
      {
        label: "Harold Stepanek",
        icon: "Person",
        type: "person",
      },
      {
        label: "John Reed-Hill Gilstad",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "SUMMIT HEALTH AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Christie York",
        icon: "Person",
        type: "person",
      },
      {
        label: "Anthony Slonim",
        icon: "Person",
        type: "person",
      },
      {
        label: "Mary Catherine Prickett",
        icon: "Person",
        type: "person",
      },
      {
        label: "Chinedum Ikwueme",
        icon: "Person",
        type: "person",
      },
      {
        label: "Mitchell Guanzon",
        icon: "Person",
        type: "person",
      },
      {
        label: "Kayla Tomlin",
        icon: "Person",
        type: "person",
      },
      {
        label: "Molly Vaughan",
        icon: "Person",
        type: "person",
      },
      {
        label: "Alfonso Brochero",
        icon: "Person",
        type: "person",
      },
      {
        label: "April Ruffin",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "EMPORIA REHAB AND HEALTHCARE",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Linda Brown-Trudel",
        icon: "Person",
        type: "person",
      },
      {
        label: "Johnee Nedrick",
        icon: "Person",
        type: "person",
      },
      {
        label: "Arlyn Salabao",
        icon: "Person",
        type: "person",
      },
      {
        label: "Manaye Kebede",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "PULASKI HEALTH \u0026 REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Timothy Mckernan",
        icon: "Person",
        type: "person",
      },
      {
        label: "Zachary Page",
        icon: "Person",
        type: "person",
      },
      {
        label: "Shannon Hill",
        icon: "Person",
        type: "person",
      },
      {
        label: "Lisa Coleman",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "AMELIA HEALTH AND REHAB",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Tracy Keisling",
        icon: "Person",
        type: "person",
      },
      {
        label: "Aparna Ranjan",
        icon: "Person",
        type: "person",
      },
      {
        label: "Kimberly Washbourne",
        icon: "Person",
        type: "person",
      },
      {
        label: "Angelia Moore",
        icon: "Person",
        type: "person",
      },
      {
        label: "Jill Garrett",
        icon: "Person",
        type: "person",
      },
      {
        label: "Trixy Headden",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "RUNK \u0026 PRATT- LIBERTY RIDGE",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Bridgette Smoot",
        icon: "Person",
        type: "person",
      },
    ],
  },
  {
    label: "THREE RIVERS HEALTH \u0026 REHAB CENTER",
    icon: "Business",
    type: "healthcare",
    children: [
      {
        label: "Sarah Wells",
        icon: "Person",
        type: "person",
      },
      {
        label: "Pamela Scholl",
        icon: "Person",
        type: "person",
      },
      {
        label: "Harold Stepanek",
        icon: "Person",
        type: "person",
      },
    ],
  },
];
