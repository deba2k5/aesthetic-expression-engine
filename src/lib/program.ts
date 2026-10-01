import akashVani from "@/assets/maya-akash-vani.jpg";
import heroScreenprint from "@/assets/maya-hero-screenprint.jpg";
import kaliPunj from "@/assets/maya-kali-punj.jpg";
import redDust from "@/assets/maya-red-dust.jpg";

export type EventCategory = "Performance" | "Installation" | "Workshop" | "Talk";

export type MayaEvent = {
  slug: string;
  title: string;
  category: EventCategory;
  when: string;
  venue: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const events: MayaEvent[] = [
  {
    slug: "akash-vani",
    title: "Akash Vani",
    category: "Performance",
    when: "Day 01 — 19:30",
    venue: "Main Hall",
    summary:
      "An immersive listening work tracing the frequencies carried by water, voice, and memory.",
    image: akashVani,
    imageAlt: "Musician in red silhouette",
  },
  {
    slug: "kali-punj",
    title: "Kali Punj",
    category: "Performance",
    when: "Day 01 — 21:00",
    venue: "The Red Room",
    summary:
      "Physical theatre and projected ink meet in a study of force, form, and transformation.",
    image: kaliPunj,
    imageAlt: "Crimson ink in motion",
  },
  {
    slug: "night-raga",
    title: "Night Raga",
    category: "Performance",
    when: "Day 02 — 22:30",
    venue: "Courtyard",
    summary:
      "A late-night raga that stretches until the city goes quiet. Bring nothing but attention.",
    image: redDust,
    imageAlt: "Crimson pigment and fabric texture",
  },
  {
    slug: "the-red-room",
    title: "The Red Room",
    category: "Installation",
    when: "All days — 12:00 onward",
    venue: "Gallery Wing",
    summary:
      "A walk-in screenprint of the old city, printed, torn, and reassembled around the viewer.",
    image: heroScreenprint,
    imageAlt: "Red and black screenprint architecture",
  },
  {
    slug: "ink-and-static",
    title: "Ink & Static",
    category: "Workshop",
    when: "Day 02 — 14:00",
    venue: "Studio B",
    summary:
      "Hands-on session pairing Bengali calligraphy with circuit-bent sound. Limited places.",
    image: kaliPunj,
    imageAlt: "Crimson ink in motion",
  },
  {
    slug: "shaping-silence",
    title: "Shaping Silence",
    category: "Talk",
    when: "Day 03 — 16:00",
    venue: "Library",
    summary:
      "Artists of the edition in conversation on restraint, noise, and what the room remembers.",
    image: akashVani,
    imageAlt: "Musician in red silhouette",
  },
];

export type ScheduleSlot = {
  time: string;
  title: string;
  category: EventCategory | "Open";
  venue: string;
};

export type ScheduleDay = {
  day: string;
  name: string;
  slots: ScheduleSlot[];
};

export const schedule: ScheduleDay[] = [
  {
    day: "Day 01",
    name: "Opening Night",
    slots: [
      { time: "16:00", title: "Doors & Registration", category: "Open", venue: "Foyer" },
      {
        time: "17:00",
        title: "The Red Room opens",
        category: "Installation",
        venue: "Gallery Wing",
      },
      { time: "19:30", title: "Akash Vani", category: "Performance", venue: "Main Hall" },
      { time: "21:00", title: "Kali Punj", category: "Performance", venue: "The Red Room" },
    ],
  },
  {
    day: "Day 02",
    name: "The Long Day",
    slots: [
      { time: "12:00", title: "The Red Room", category: "Installation", venue: "Gallery Wing" },
      { time: "14:00", title: "Ink & Static", category: "Workshop", venue: "Studio B" },
      { time: "18:00", title: "Open Studios", category: "Open", venue: "All spaces" },
      { time: "22:30", title: "Night Raga", category: "Performance", venue: "Courtyard" },
    ],
  },
  {
    day: "Day 03",
    name: "Afterimage",
    slots: [
      { time: "12:00", title: "The Red Room", category: "Installation", venue: "Gallery Wing" },
      { time: "16:00", title: "Shaping Silence", category: "Talk", venue: "Library" },
      { time: "19:00", title: "Closing Assembly", category: "Performance", venue: "Main Hall" },
    ],
  },
];
