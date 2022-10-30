# osu!game Discord Events
A website for archiving multiplayer event leaderboards for the unofficial osu! Game Discord server.

## About
The tech stack used for this website:
- The website is built with [Lume](https://lume.land/) - a static site generator for [Deno](https://deno.land/). It's almost perfect for this use case - I have some data (multiplayer match scores) and I want to display them in nice tables (leaderboards for the scores). There is a mechanism to define pages in a folder structure, give them some data and create some HTML out of it.
- [Pug](https://pugjs.org/) template engine - a concise and clean way to write HTML. In retrospect, may not have been the best choice - there's some friction with the Lume's layout and component functionality. May end up using something else and rewriting the templates eventually.
- [SCSS](https://sass-lang.com/) for a CSS preprocessor - just a better way to write CSS. To be fair, most of what I use for is going to be available in vanilla CSS eventually (https://drafts.csswg.org/css-nesting-1/).
- [Windi CSS](https://windicss.org/) as a CSS framework. Why not [Tailwind](https://tailwindcss.com/)? Windi was the one available as a plugin for Lume and they are pretty much interchangeable. Unfortunately, there's some friction with Pug again - Windi uses some funky characters in class names and Pug does not allow them for shorthand definitions.

## Building
Building the project locally for development is very easy and straight forward:
1. Make sure you have Deno installed: https://deno.land/#installation
2. Clone the repository `git clone https://github.com/ekgame/lume-osu-game-event.git`
3. Change the directory to the cloned folder `cd lume-osu-game-event`
4. Start a local server with `deno task serve`