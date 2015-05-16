# ember-cli-static

An addon for [Ember CLI][cli] that precompiles static page content from
[Markdown][md] and [YAML Front Matter][yfm].

## Installation

Use [Ember CLI][cli] to install this addon to your app:

```bash
$ ember install ember-cli-static
```

## Usage

Generate a static page from within your app:

```bash
$ ember generate page TITLE
```

Create a route to the `page` component:

```javascript
Router.map(function() {
  this.route('page', { path: '/:id' });
});
```

Start your server and browse to <http://localhost:4200/TITLE> to see
your page in action.

## Running

To start the development server:

```bash
$ make
```

## Running Tests

To run all QUnit and CasperJS tests:

```bash
$ make test
```

[cli]: http://ember-cli.com
[md]: http://daringfireball.net/projects/markdown/syntax
[yfm]: http://jekyllrb.com/docs/frontmatter/
