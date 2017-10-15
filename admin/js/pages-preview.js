// pages preview
var PagesPreview = createClass({

  render: function() {

    // entry var
    var entry = this.props.entry;


    // placeholder vars
    var banner = '';
    var article = '';
    var sidebar = '';


    // page data object
    var data = {
      title: entry.getIn(['data', 'title']),
      image: entry.getIn(['data', 'image']),
      body: this.props.widgetFor('body'),
      infoImage: entry.getIn(['data', 'info-image']),
      info: this.props.widgetFor('info'),
      prices: entry.getIn(['data', 'prices']),
    }


    // banner and caption
    if (data.image != null) {

      var url = this.props.getAsset(data.image);
      var quote = entry.getIn(['data', 'caption', 'quote']);
      var caption = '';

      // quote
      if (quote != null) {

        var verticalAlign = entry.getIn(['data', 'caption', 'vertical-align']);
        var horizontalAlign = entry.getIn(['data', 'caption', 'horizontal-align']);

        caption = h('figcaption', {className: verticalAlign + " " + horizontalAlign},
          h('blockquote', {}, h('p', {}, quote )),
        );

      }

      // banner
      banner = h('figure', {className: "banner"},
        h('picture', {className: 'image sidebar', style: {'background-image': 'url(' + url.toString() + ')'}}),
        caption,
      );

    }


    // sidebar
    if (data.infoImage != null || data.info != null || data.prices != null) {

      var image = '';
      var info = '';
      var prices = '';

      // info image
      if (data.infoImage != null) {
        var url = this.props.getAsset(data.infoImage);
        image = h('figure', {},
          h('picture', {className: 'image sidebar', style: {'background-image': 'url(' + url.toString() + ')'}}),
        );
      }

      // info
      if (data.info != null) {
        info = h('section', {className: 'block description'}, h('h3', {className: 'hidden'}, 'Meer informatie'), data.info);
      }

      // prices
      if (data.prices != null) {

        datalist = this.props.widgetsFor('prices').map(function(price, index) {
          return [
            h('dt', {}, [h('span', {}, price.getIn(['data', 'name'])), h('span', {className: 'time'}, price.getIn(['data', 'time']))]),
            h('dd', {}, price.getIn(['data', 'price']))
          ];
        });

        prices = h('section', {className: "block"}, h('h3', {}, 'Prijzen'), h('dl', {}, datalist));

      }

      // sidebar
      sidebar = h('aside', {}, image, info, prices)

    }


    // article
    article = h('main', {},
      h('article', {},
        h('h2', {}, h('span', {}, data.title)),
        h('div', {"className": "content"}, data.body),
      ), sidebar,
    );


    // render
    return h('div', {className: 'body'}, banner, article);

  }
});


// register preview template
CMS.registerPreviewTemplate("pages", PagesPreview);
