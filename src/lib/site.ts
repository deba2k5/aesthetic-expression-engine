// Brand and fest details shared across pages. Update here, not in components.
export const site = {
  name: "IEMPACT",
  year: 2027,
  theme: "MAYA",
  themeBengali: "মায়া",
  city: "Kolkata",
  email: "hello@maya.events",
  // Placeholder until official dates are announced; drives the home countdown.
  startsAt: "2027-02-12T10:00:00+05:30",
} as const;

export const brand = `${site.name} ${site.year}`;

export const pageTitle = (page?: string) =>
  page ? `${page} — ${brand}` : `${brand} — ${site.theme}`;
