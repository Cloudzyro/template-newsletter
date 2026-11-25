# Unslop notes

Pass made with the unslop skill by Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), CC BY 4.0.

## Audit (first build)

Level: light. Built against the skill from the start (one cool paper ramp, a single route green, serif for reading, no gradient masthead, no subscriber-count badge, no avatar row), so the first render showed a few real signs:

- Type: `tabular-nums` on the whole body made Schibsted Grotesk space its commas and periods as wide as digits ("street , a bench ,"), across every page
- Copy: "About a 6 minute read" on the home page while each issue takes about two minutes
- Reading time: worked out from the raw body and rounded down, so a 375-word issue said 1 minute
- About on phones: the email address pushed the page to 422px at a 360px screen; "every sunday morning" lost its capital
- The archive could easily have been a grid of equal cards; drawn instead as a route line with stops

None of: gradients, glows, gradient text, emoji, uppercase tracked labels, pill badges, greeting headline, hover scale, transition-all, looping motion, hype words, heavy weights, unlabeled audience numbers.

## Direction

- Product: the website for a free weekly letter about streets and transit, where people subscribe, read past issues and book sponsorships
- Character: patient, specific, quietly civic
- World: bus timetables, route maps and stop signs, the paper of a printed schedule
- Moments: the archive as a transit line with each issue a stop (the latest filled in the route green), and long serif reading pages
- Signature: the stop marker, a ringed dot used wherever an issue number appears and in the logo

## Fixes

- Type: tabular figures only where numbers line up; Source Serif 4 for headlines and reading, Schibsted Grotesk for the interface, weights 400 and 500
- Copy: read time matches the issues; reading time counts the rendered text at 200 words a minute, rounded up; "weekly on Sundays" on About
- Layout: split masthead with the latest issue as one card; archive and about as text-beside-list splits; sponsor rates as a table that becomes stacked rows on phones
- Details: long email addresses wrap; sample figures, rates and sponsor names labeled on the page
- Spacing, color and motion: unchanged (96px sections, 64px on phones; route green only on the line, the latest stop, links and the current nav item; color transitions and a 0.98 press)

## Screenshots

- screenshot-2: An issue page (No. 2, Eleven minutes on Alder Street)
- screenshot-3: The archive, issues by month on the route line
