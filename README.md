# teem-link-preview

Teem link preview is the independent [node](https://nodejs.org) server that built as part of Google Summer of Code 2017 for the Project [Teem](https://app.teem.works). Below is some information about the functions and working of the server:

### Contextual Link Previews

+ The first task for which this server was built was to provide a way for the Teem app to fetch the [opengraph](http://ogp.me) meta data from the sites, links of whose users add in the link annotations in the Teem pad.
+ The server basically gets the request from the Teem Application about the page for which meta data is to be fetched.
+ Server makes a **GET** request to the given url and parses the response in order to get the meta data.
+ The data is then sent back to the Teem App and it displays the data in the form of a popover that comes in the bottom of the given link.

### Social Link Sharing
This server was further extended for covering the second goal , which was to allow social sharing of Teems by proivding other bots with rich meta data content of the Teem being shared!

+ We are using [nginx](https://nginx.org/en/) to redirect the specific user agents to this server! Normal users are redirected to the Teem app whereas the bots are redirected to this server.
+ When a bot hits this server, we basically grab the ``urlId`` of the Teem its trying to fetch. We then query the [SwellRT](https://swellrt.teem.works/) server for the project model and render this meta data in the form of html and give it back to the bot.

*Below is a screenshot of the preview that a whatsapp gets now vs. the preview with gnusocial used to get before the implementation.*

**Before**

![GnuSocial rendering {{}}](https://cloud.githubusercontent.com/assets/7475584/20716845/e8d629c0-b653-11e6-9834-dc778bee88e4.png "No proper meta content")

**After**
![Web whatsapp rendering link preview](https://raw.githubusercontent.com/krshubham/Teem-GSoC/master/diagrams/working-link-preview.png "correctly fetched metadata")

