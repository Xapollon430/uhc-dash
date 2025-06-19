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
            label: "Alamance",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Donna Mu", icon: Person, type: "person" },
              { label: "Christeen Jefferson (LOCUM)", icon: Person, type: "person" },
              { label: "Schwartzman", icon: Person, type: "person" },
            ],
          },
          {
            label: "Lexington (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Berna Jean Besana-Mirafuente", icon: Person, type: "person" },
              { label: "Meladie Mitchell", icon: Person, type: "person" },
              { label: "Schwartzman", icon: Person, type: "person" },
            ],
          },
          {
            label: "Guilford (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Kim Williams", icon: Person, type: "person" },
              { label: "Crystal Moss (team lead)", icon: Person, type: "person" },
              { label: "Schwartzman", icon: Person, type: "person" },
            ],
          },
          {
            label: "Piedmont",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Desirae Downs", icon: Person, type: "person" },
              { label: "Schwartzman", icon: Person, type: "person" },
            ],
          },
        ],
      },
      {
        label: "NC-D2",
        icon: Business,
        children: [
          {
            label: "Windsor",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Sandy Kolb", icon: Person, type: "person" },
              { label: "Severa", icon: Person, type: "person" },
            ],
          },
          {
            label: "Hertford",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Jayme Kressen", icon: Person, type: "person" },
              { label: "Severa", icon: Person, type: "person" },
            ],
          },
          {
            label: "Laurel Park",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "OPEN", icon: Person, type: "person" },
              { label: "Severa", icon: Person, type: "person" },
            ],
          },
          {
            label: "Elizabeth City",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Ellen Landreth (Team Lead)", icon: Person, type: "person" },
              { label: "Kara Waldrop (RVU)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Ahoskie",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "May Anderson", icon: Person, type: "person" },
              { label: "Ferguson (Non-UHC)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Gatesville",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Ferguson (Non-UHC)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Outer Banks",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Saree Allen (RVU)", icon: Person, type: "person" },
            ],
          },
        ],
      },
      {
        label: "NC-D3",
        icon: Business,
        children: [
          {
            label: "Harmony Park (Wilson)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Leigh McKenzie", icon: Person, type: "person" },
              { label: "P Patel (non-UHC)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Wilson H&R",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Tennillya Pearce", icon: Person, type: "person" },
              { label: "Ashraf (non-UHC)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Kenansville",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Isai Cruz", icon: Person, type: "person" },
              { label: "P Patel (non-UHC)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Clayton",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Shirlene Blackwood", icon: Person, type: "person" },
              { label: "Shaki (non-UHC)", icon: Person, type: "person" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Virginia",
    icon: LocationOn,
    children: [
      {
        label: "VA-D1",
        icon: Business,
        children: [
          {
            label: "Salem (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Laszlo Vecsei", icon: Person, type: "person" },
              { label: "Tiffany Douglas, NP", icon: Person, type: "person" },
              { label: "Mariana Herrera, NP", icon: Person, type: "person" },
              { label: "Brochero (Medical Director)", icon: Person, type: "person" },
              { label: "Draper", icon: Person, type: "person" },
            ],
          },
          {
            label: "Heritage Hall of Blacksburg",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Indre Malaiskaite, NP", icon: Person, type: "person" },
              { label: "Ellie Tubbs -TTP", icon: Person, type: "person" },
            ],
          },
          {
            label: "Gene Bailey, PA Bates/Davis",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Gene Bailey, PA", icon: Person, type: "person" },
              { label: "Bates/Davis", icon: Person, type: "person" },
            ],
          },
        ],
      },
      {
        label: "VA-D2",
        icon: Business,
        children: [
          {
            label: "Chase City (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Amy Daniels", icon: Person, type: "person" },
              { label: "Lori Fuquay", icon: Person, type: "person" },
              { label: "Brochero (medical director)", icon: Person, type: "person" },
              { label: "Ruffin (Locum)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Piney Forest",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Mandy Crews (team lead)", icon: Person, type: "person" },
              { label: "Schwartzman", icon: Person, type: "person" },
            ],
          },
          {
            label: "Riverside (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Lisa Coleman", icon: Person, type: "person" },
              { label: "Daleen Lewis", icon: Person, type: "person" },
              { label: "Schwartzman", icon: Person, type: "person" },
            ],
          },
          {
            label: "Stanleytown (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Jenna Holt", icon: Person, type: "person" },
              { label: "Krystal Woodson", icon: Person, type: "person" },
              { label: "Patriarco", icon: Person, type: "person" },
            ],
          },
        ],
      },
      {
        label: "VA-D3",
        icon: Business,
        children: [
          {
            label: "Summit (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Molly Vaughan", icon: Person, type: "person" },
              { label: "Mitchell Guanzon", icon: Person, type: "person" },
              { label: "Chinedum Ikwueme", icon: Person, type: "person" },
              { label: "Christie York", icon: Person, type: "person" },
              { label: "Slonim/ Brochero", icon: Person, type: "person" },
            ],
          },
          {
            label: "Oakwood",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Kayla Tomlin", icon: Person, type: "person" },
              { label: "Cody Hughes - PRN", icon: Person, type: "person" },
              { label: "Brochero", icon: Person, type: "person" },
            ],
          },
          {
            label: "Runk & Pratt",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Bridgette Smoot (team lead)", icon: Person, type: "person" },
              { label: "Gezen (non-UHC)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Bedford Nursing Home",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Bridgette Smoot", icon: Person, type: "person" },
              { label: "Gezen (non-UHC)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Heritage Green",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Bridgette Smoot", icon: Person, type: "person" },
              { label: "Gezen (non-UHC)", icon: Person, type: "person" },
            ],
          },
        ],
      },
      {
        label: "VA-D5",
        icon: Business,
        children: [
          {
            label: "Three Rivers",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Sarah Wells", icon: Person, type: "person" },
              { label: "Stepanek", icon: Person, type: "person" },
            ],
          },
          {
            label: "Waterview (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Tiffany Curry", icon: Person, type: "person" },
              { label: "Taneisha Gayles", icon: Person, type: "person" },
              { label: "Williams (RVU)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Westmoreland",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Abdul Kawa", icon: Person, type: "person" },
              { label: "Gina Martin (PT)", icon: Person, type: "person" },
              { label: "Gilstad", icon: Person, type: "person" },
            ],
          },
          {
            label: "Northern Neck",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Sarah Wells (team lead)", icon: Person, type: "person" },
              { label: "Brown (Locum)", icon: Person, type: "person" },
            ],
          },
        ],
      },
      {
        label: "VA-D6",
        icon: Business,
        children: [
          {
            label: "New Market (7/7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Lisa Reedy", icon: Person, type: "person" },
              { label: "Tiffany English (PA) (team lead)", icon: Person, type: "person" },
              { label: "Ishaq (RVU)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Shenandoah",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Welly", icon: Person, type: "person" },
            ],
          },
          {
            label: "Woodlands",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Welly", icon: Person, type: "person" },
            ],
          },
          {
            label: "AC of Madison",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Lori Buecler (LOCUM)", icon: Person, type: "person" },
              { label: "Ishaq (RVU)", icon: Person, type: "person" },
              { label: "Young? 9/1", icon: Person, type: "person" },
            ],
          },
        ],
      },
      {
        label: "VA-D7",
        icon: Business,
        children: [
          {
            label: "Courtland",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Jennifer Horne", icon: Person, type: "person" },
              { label: "Nguyen/ Williams (Medical Director)(RVU)", icon: Person, type: "person" },
              { label: "Young? 9/1", icon: Person, type: "person" },
            ],
          },
          {
            label: "Emporia",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Johnee Nedrick, NP", icon: Person, type: "person" },
              { label: "Anderson (non-UHC)/ Brown( LOCUM)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Holly Manor",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Jennifer Davis", icon: Person, type: "person" },
              { label: "Shanthi Rondot", icon: Person, type: "person" },
              { label: "Ruffin (Locum)", icon: Person, type: "person" },
              { label: "Young? 9/1", icon: Person, type: "person" },
            ],
          },
          {
            label: "Waverly",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Angelia Moore", icon: Person, type: "person" },
              { label: "Brown (Locum)/ Williams (Medical Director)(RVU)", icon: Person, type: "person" },
              { label: "Young? 9/1", icon: Person, type: "person" },
            ],
          },
          {
            label: "Amelia",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Tracy Keisling (Locum)", icon: Person, type: "person" },
              { label: "Ranjan", icon: Person, type: "person" },
              { label: "Young? 9/1", icon: Person, type: "person" },
            ],
          },
        ],
      },
      {
        label: "VA-D8",
        icon: Business,
        children: [
          {
            label: "NOVA",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Miranda Fields (team lead)", icon: Person, type: "person" },
              { label: "Brittany Estep", icon: Person, type: "person" },
              { label: "Barlow", icon: Person, type: "person" },
            ],
          },
          {
            label: "Ridgecrest (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Brittany Estep", icon: Person, type: "person" },
              { label: "Miranda Fields", icon: Person, type: "person" },
              { label: "Barlow", icon: Person, type: "person" },
            ],
          },
          {
            label: "Valley/Chilhowie (7/7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Kelli Lane (7/7)", icon: Person, type: "person" },
              { label: "Jeremy Whited (7/7)", icon: Person, type: "person" },
              { label: "Goen", icon: Person, type: "person" },
            ],
          },
          {
            label: "Deer Meadows (5)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Karen Vickers", icon: Person, type: "person" },
              { label: "Goen", icon: Person, type: "person" },
            ],
          },
        ],
      },
      {
        label: "VA-D9",
        icon: Business,
        children: [
          {
            label: "Pulaski (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Shannon Hill", icon: Person, type: "person" },
              { label: "Zach Page", icon: Person, type: "person" },
              { label: "McKernan/Brochero (Medical Director)", icon: Person, type: "person" },
            ],
          },
          {
            label: "Radford",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Becky Green (team lead)", icon: Person, type: "person" },
              { label: "McKernan", icon: Person, type: "person" },
            ],
          },
          {
            label: "Highland Ridge (7x7)",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Jill Garrett", icon: Person, type: "person" },
              { label: "Amy Reedy", icon: Person, type: "person" },
              { label: "McKernan", icon: Person, type: "person" },
            ],
          },
          {
            label: "Mountain Laurel",
            icon: Business,
            type: "healthcare",
            children: [
              { label: "Deb Parsons", icon: Person, type: "person" },
              { label: "Megan Osborne", icon: Person, type: "person" },
              { label: "Bates", icon: Person, type: "person" },
            ],
          },
        ],
      },
    ],
  },
];
