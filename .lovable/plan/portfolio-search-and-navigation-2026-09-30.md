# Portfolio Search and Navigation

## What will change

- Add a compact navigation bar at the top of every portfolio page.
- Include a search field that recommends matching pages and key portfolio topics while the visitor types.
- Let each recommendation open the relevant page or homepage section.
- Add a page dropdown listing the homepage, AIS leadership page, and all four project pages.
- Give working buttons and prominent links a consistent raised “pop-out” effect when hovered or keyboard-focused.

## Technical details

- Build the navigation as one shared React component rendered by the root layout so it stays consistent everywhere.
- Use a static, CV-supported search index covering experience, education, skills, leadership, and project content; no data service is needed.
- Use TanStack Router links for internal navigation and preserve homepage section anchors for recruiter scanning.
- Apply the interaction effect through a shared semantic CSS utility, with reduced-motion support and visible keyboard focus.
- Verify search selection, dropdown navigation, horizontal overflow, and hover/focus states at desktop and mobile sizes.