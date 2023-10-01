Goal: Kanji searchable by component name. Search bar with dynamic entries below that I can click into, components have links to their respective kanji / components. A "dynamically" created page for each.

Waypoint 1: Display the first 10, with links on main kanji names. Browsing functionality works (e.g., back button).

- [x] create initial page and js file
- [x] load json file, put in a store
- [x] create template for initial main page kanji
- [x] dynamically just display the data from each
- [x] create a router
- [x] router init --> click event for all links on page
- [x] get href value for each


Random:
- [x] sort by frame number (use data attributes) --> ended up caching elements in array, get this for free
- [ ] create map from keyword to all elements that have component (start with just array lookup, then see if there's a speed-up with a map)
