// pages preview
var PagePreview = createClass({

  render: function() {

    // entry var
    var entry = this.props.entry;


    // placeholder vars
    var banner = '';
    var article = '';
    var sidebar = '';
    var info = '';
    var datalist = '';
    var links = '';
    var butons = '';

    // page data object
    var data = {
      title: entry.getIn(['data', 'title']),
      image: entry.getIn(['data', 'image']),
      body: this.props.widgetFor('body'),
      caption: {
        quote: entry.getIn(['data', 'caption', 'quote']),
        verticalAlign: entry.getIn(['data', 'caption', 'vertical-align']),
        horizontalAlign: entry.getIn(['data', 'caption', 'horizontal-align']),
      },
      info: {
        title: entry.getIn(['data', 'info', 'title']),
        image: entry.getIn(['data', 'info', 'image']),
        description: this.props.widgetsFor('info').getIn(['widgets', 'description']),
      },
      datalist: {
        title: entry.getIn(['data', 'datalist', 'title']),
        description: this.props.widgetsFor('datalist').getIn(['widgets', 'description']),
        items: entry.getIn(['data', 'datalist', 'items']),
      },
      links: {
        title: entry.getIn(['data', 'links', 'title']),
        description: this.props.widgetsFor('links').getIn(['widgets', 'description']),
        items: entry.getIn(['data', 'links', 'items']),
      },
      buttons: entry.getIn(['data', 'buttons']),
    }


    // banner and caption
    if (data.image != null) {

      // placeholder vars
      var url = this.props.getAsset(data.image);
      var caption = '';

      // quote
      if (data.caption.quote != '') {
        caption = h('figcaption', {className: data.caption.verticalAlign + " " + data.caption.horizontalAlign},
          h('blockquote', {}, h('p', {}, data.caption.quote )),
        );
      }

      // banner
      banner = h('figure', {className: "banner"},
        h('picture', {className: 'image image-banner', style: {'background-image': 'url(' + url.toString() + ')'}}),
        caption,
      );

    }


    // info
    if (data.info.image != null || data.info.description.props.value) {

      // placeholder vars
      var title = '';
      var image = '';
      var description = '';

      // info title
      if (data.info.title != '""') {
        title = h('h3', {}, data.info.title);
      } else {
        title = h('h3', {className: 'hidden'}, 'informatie');
      }

      // info image
      if (data.info.image != null) {
        var url = this.props.getAsset(data.info.image);
        image = h('figure', {},
          h('picture', {className: 'image image-sidebar', style: {'background-image': 'url(' + url.toString() + ')'}}),
        );
      }

      // info description
      if (data.info.description.props.value != null) {
        description = h('section', {className: 'block'}, title, data.info.description);
      }

      // react component
      info = [image, description];

    }


    // datalist
    if (data.datalist.items || data.datalist.description.props.value) {

      // placeholder vars
      var title = '';
      var items = '';

      // datalist title
      if (data.datalist.title != '') {
        title = h('h3', {}, data.datalist.title);
      } else {
        title = h('h3', {className: 'hidden'}, 'Opsomming');
      }

      // datalist items
      if (data.datalist.items != null) {
        var items = h('dl', {}, data.datalist.items.map(function(item, index) {
          return [
            h('dt', {}, [item.get('title'), h('span', {className: 'info'}, ' ' + item.get('info'))]),
            h('dd', {}, item.get('data'))
          ];
        }));

      }

      // react component
      datalist = h('section', {className: 'block'}, title, data.datalist.description.props.value ? data.datalist.description : '', items);

    }


    // links
    if (data.links.items != null || data.links.description.props.value) {

      // placeholder vars
      var title = '';
      var items = '';

      // datalist title
      if (data.links.title != '') {
        title = h('h3', {}, data.links.title);
      } else {
        title = h('h3', {className: 'hidden'}, 'Opsomming');
      }

      // datalist items
      if (data.links.items != null) {
        var items = data.links.items.map(function(item, index) {
          return h('a', {href: item.get('url')}, item.get('title'));
        });
      }

      // react component
      links = h('section', {className: 'block'}, title, data.links.description.props.value ? data.links.description : '', items);

    }


    if (data.buttons != null) {
      buttons = data.buttons.map(function(item, index) {
        return h('a', {className: 'button', href: item.get('url')}, item.get('title'));
      });
    }

    // sidebar
    if (info || datalist || links) {
      sidebar = h('aside', {}, [info, datalist, links, buttons]);
    }


    // article
    article = h('main', {},
      h('article', {},
        h('h2', {}, h('span', {}, data.title)),
        h('div', {"className": "content"}, data.body),
      ), sidebar,
    );


    return h('div', {className: 'body'}, banner, article);

  }
});



// register preview template
CMS.registerPreviewTemplate("pages", PagePreview);
