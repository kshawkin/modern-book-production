# Modern Book Production

[This is a visual representation of the modern book-production process.](https://electricbookworks.github.io/modern-book-production/) While there is no one way to make books, most digital-first workflows for professional book production will look something like this.

This project is maintained by Electric Book Works, with your help.


## Share

You can get [a static image to share here](https://electricbookworks.github.io/modern-book-production/downloads/Modern-Book-Production.png).

If you want to embed the graphic on your site, place this code in your HTML:

``` html
<iframe src="https://electricbookworks.github.io/modern-book-production/index.html" title="Modern Book Production" width="100%" height="5100px"></iframe>
```

Depending on your site's design, you may want to adjust the `height` value there. Add more height to avoid a scrollbar. Reduce the height to avoid empty space below the graphic.


## Contribute

Anyone can suggest changes.

To change the text of a task, find the relevant task in the `tasks` folder. On GitHub, you can edit the file and follow the prompts to submit a pull request (PR). The EBW team will review your PR and either merge it in or get back to you in the PR's comments thread.

To change the structure, start with `index.md`. You'll see it's divided into phases ('Conceptualisation', 'Setup', 'Creation', etc.). Each phase comprises different stages. A stage contains tasks that take place simultaneously.

To change other features, such as the design or interactions, you may need more technical skill. See 'Development' below.


## Development

This is a Jekyll site, so you'll need Jekyll's dependencies installed first. The first time you run the site locally, start by installing the necessary gems by entering `bundle install` at the command line, in this folder.

Then to serve the website on your computer, run `bundle exec jekyll serve` in the same place. In your browser, go to [localhost:4000](http://localhost:4000) to see the site.

- If you want to change the text of a task, edit the markdown files in `tasks`. 
- If you want to change more than that, take some time to look through the structure of `index.md`, `_layouts/default.html`, and the HTML templates in `_includes`.
- If you want to change the design, you'll start with `styles/web.css`, which imports Sass partials from `_sass`.
