A simple app to copy text to an online clipboard (readable only by you, but still..don't copy passwords in here!).

Right now it uses Firebase for auth and storage. It's pretty mimial at the moment, but could easily be improved:
- handle more signin types (email, sms, anonymous/temp?)
- auto read your clipboard with `navigator.clipboard` to pre-populate the local text
- handle different clipboard mime-types? newlines?
- share a household clipboard? (that was kinda the original intent, but now with firebase you need a user, etc)
