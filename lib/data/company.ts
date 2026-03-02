import { CompanyInfo } from "@/lib/types";

export const company: CompanyInfo = {
  name: "Elliot Electrical",
  tagline: "Your Go2 in Electrical",
  established: 2001,
  owner: "Kevin Elliot",
  phone: "066 489 7335",
  phoneInternational: "+27 66 489 7335",
  phones: [
    {
      label: "Johannesburg",
      phone: "066 489 7335",
      phoneInternational: "+27 66 489 7335",
    },
    {
      label: "Plett",
      phone: "082 573 7098",
      phoneInternational: "+27 82 573 7098",
    },
  ],
  email: "info@elliotelectrical.co.za",
  address: "168 Blueberry Rd, Randpark Ridge, Randburg",
  areas: ["Greater Gauteng", "Garden Route"],
};
