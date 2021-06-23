I want to run a tiny server on a raspberry pi or similar that acts as a clipboard
for any computer on our lan. Initially there won't be any clients, but you could
easily make one with curl or similar for linux. Android might be slightly trickier,
but in theory making a simple http call shouldn't be hard. Also, initially it's only
going to support text. My main use case that I can think of is sharing URLs between
my phone and my computer, or my phone and my wife's phone, etc.

Update 2021-06-18:
  - so far I've only made a web client, where you can upload your text or
    copy down the server's text. I think I want to put this over https
    because then you can use the fancy navigator.clipboard stuff
  - ok, I've added a firebase version. this might be easier since
    it won't depend on my raspi. now that takes care of the https part too

Update 2021-06-22:
  - one thing this complicates is the whole sharing thing...like I want
    a clipboard/message board/whatever for the whole house. but I guess
    you could have a list of people with which the clipboard is shared.
    ...or maybe by ip? or....
  - I'm deleting the fastapi stuff (saving it as an example in a
    different repo) and focusing just on the javascript side


