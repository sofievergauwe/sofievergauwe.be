// pages preview
var FrontPagePreview = createClass({

  render: function() {

    // entry var
    var entry = this.props.entry;


    // placeholder vars
    var banner = '';
    var teasers = '';


    // page data object
    var data = {
      title: entry.getIn(['data', 'title']),
      image: entry.getIn(['data', 'image']),
      caption: {
        quote: entry.getIn(['data', 'caption', 'quote']),
        align: entry.getIn(['data', 'caption', 'align']),
      },
      teasers: entry.getIn(['data', 'teasers']),
    }

    // banner and caption
    if (data.image != null) {

      var url = this.props.getAsset(data.image);
      var caption = '';

      // quote
      if (quote != null) {

        caption = h('figcaption', {className: data.caption.align },
          h('blockquote', {}, h('p', {}, data.caption.quote )),
        );

      }

      // banner
      banner = h('figure', {className: "banner"},
        h('picture', {className: 'image image-banner', style: {'background-image': 'url(' + url.toString() + ')'}}),
        caption,
      );

    }


    if (data.teasers != null) {

      var articles = this.props.widgetsFor('teasers').map(function(teaser, index) {

        var title = teaser.getIn(['data', 'title']);
        var image = teaser.getIn(['data', 'image']);
        var description = teaser.getIn(['widgets', 'description']);
        var link = teaser.getIn(['data', 'link']);
        var footer = '';
        
        if (link) {
          footer = h('footer', {}, h('a', {src: link}, 'Lees meer'));
        }

        return h('article', {className: 'teaser'},
          h('figure', {}, h('picture', {className: 'image image-teaser', style: {'background-image': 'url(' + image + ')'}})),
          h('div', {className: 'block'}, h('h3', {}, title), h('p', {}, description), footer),
        );

      });

      teasers = h('main', {}, h('section', {className: 'teasers'}, articles));

    }



    // render
    return h('div', {className: 'body'}, banner, teasers);

  }
});


// register preview template
CMS.registerPreviewTemplate("frontpage", FrontPagePreview);
