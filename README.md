API basejump: Timestamp Microservice
=========================

User stories:

- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)<br>
- If it does, it returns both the Unix timestamp and the natural language form of that date.<br>
- If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage:

https://timestamp-hr.glitch.me/December%2015,%202015

https://timestamp-hr.glitch.me/1450137600

Example output:

{ "unix": 1450137600, "natural": "December 15, 2015" }


Your Project
------------

On the front-end,
- `public/client.js`, `public/style.css` and `views/index.html`
- `assets`, like images or music.

On the back-end,
- app starts at `server.js`
- rameworks and packages in `package.json`


Made by [hr](https://github.com/hrego/)
-------------------


