# Modern Book Production

This is a graphic representation of the modern book-production process. It is maintained by Electric Book Works.


## Contribute

Anyone can suggest changes.

To change the text of a task, find the relevant task in the `text` folder. On GitHub, you can edit the file and follow the prompts to submit a pull request (PR). The EBW team will review your PR and either merge it in or get back to you in the PR's comments thread.

To change the structure, start with `index.md`. You'll see it's divided into phases ('Conceptualisation', 'Setup', 'Creation', etc.). Each phase comprises different stages. A stage contains tasks that take place simultaneously.

To change other features, such as the design or interactions, you may need more technical skill. See 'Development' below.


## Development

This is a Jekyll site, so you'll need Jekyll's dependencies installed first. The first time you run the site locally, start by installing the necessary gems by entering `bundle install` at the command line, in this folder.

Then to serve the website on your computer, run `bundle exec jekyll serve` in the same place. In your browser, go to [localhost:4000](http://localhost:4000) to see the site.

If you only want to change text, edit the markdown files in `text`. If you want to change more than that, take some time to look through the structure of `index.md` and `_layouts/default.html` first. If you want to change the design, you'll start with `styles/web.css`, which imports Sass partials from `_scss`. You'll probably edit the partials most of the time.


## To do

- Implement design
- Add opengraph metadata to default layout using settings.yml
- Write JS for modal
