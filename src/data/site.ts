// Everything a reader sees that isn't an issue lives here.
// Issues are Markdown files in src/content/issues/.

export const site = {
  name: "The Slow Commute",
  title: "The Slow Commute, a weekly letter on streets and transit",
  description:
    "A free weekly letter by Teodora Lind about streets, buses and the small decisions that shape how a city moves. One issue every Sunday morning.",
  email: "teodora@slowcommute.example.com",
  cadence: "Every Sunday morning",
  readTime: "About a 2 minute read",
  city: "Corliss",
};

export const nav = [
  { label: "Issues", href: "/issues/" },
  { label: "About", href: "/about/" },
  { label: "Sponsor", href: "/sponsor/" },
];

export const home = {
  byline: "A weekly letter by Teodora Lind",
  headline: "Streets, buses and the small decisions that move a city",
  intro:
    "Each Sunday I take one ordinary piece of the street, a bench, a crosswalk button, a bus stop, and explain who decided it, what it costs and what it would take to change. Written from Corliss, useful anywhere.",
};

export const subscribe = {
  title: "Get the next issue on Sunday",
  text: "One email a week, free. No tracking pixels, and you can leave with one click.",
  button: "Subscribe",
  placeholder: "you@example.com",
  done: "You're on the list. The next issue arrives Sunday morning.",
};

export const writer = {
  name: "Teodora Lind",
  role: "Writer, former transit planner",
  short:
    "I spent nine years scheduling buses for the Corliss Regional Transit Authority before I started writing about what I'd learned. The Slow Commute is the letter I wanted to read back then: patient, specific and kind to the people who run things.",
  long: [
    "I grew up on the 9 bus. It ran every forty minutes on Saturdays, and I learned the timetable the way other kids learned song lyrics. That habit turned into a planning degree, and then into nine years at the Corliss Regional Transit Authority, where I drew service changes, sat through public hearings and answered a lot of email about bus stops.",
    "The thing I learned there is that almost nothing on a street is an accident. The bench that vanished, the button that seems to do nothing, the stop that's oddly far from the corner: each one is a decision, usually made by a small group of people with a budget, a rulebook and a deadline. Most of them are trying hard. Very few of them get to explain themselves.",
    "The Slow Commute is where I do that explaining. I write one issue a week, I check my numbers with the people who keep them, and I try to end every issue with something a reader could actually do, from a phone call to a council member to a better question at the next hearing.",
    "I live in the Eastgate neighborhood of Corliss with my partner and an elderly bicycle. I still ride the 9.",
  ],
  elsewhere: [
    { label: "Columns for the Corliss Ledger, 2024 to 2026", href: "#" },
    { label: "Talk: Timetables are a promise", href: "#" },
  ],
};

// Sponsorship. Every number here is sample data: replace it with your own.
export const sponsor = {
  intro:
    "One sponsor per issue, placed after the first section and marked as a sponsor. I only take sponsors I'd recommend to a friend who rides the bus, and I write the copy with you.",
  sampleNote: "Sample figures for this template. Replace them with your own.",
  audience: [
    { label: "Subscribers", value: "8,420" },
    { label: "Average open rate", value: "58%" },
    { label: "Readers in the US", value: "71%" },
    { label: "Work in planning, transit or local government", value: "1 in 3" },
  ],
  slots: [
    {
      name: "Main sponsor",
      price: "$450 per issue",
      detail: "Up to 80 words and a link after the first section, plus a thank-you line at the end of the issue.",
    },
    {
      name: "Classified",
      price: "$120 per issue",
      detail: "Up to 30 words and a link in the short list at the bottom. Jobs, events and small tools.",
    },
    {
      name: "Month of Sundays",
      price: "$1,600 for four issues",
      detail: "The main slot four weeks in a row, with copy we refresh each week.",
    },
  ],
  past: ["Wayfare Bike Repair", "Corliss Walks", "Northline Stationery", "The Platform Fund"],
  bookedUntil: "Main slots are booked through January 10, 2027 (sample)",
};
