//= require js/plugins/instafeed.min.js
//= require js/plugins/baguetteBox.min.js

var feed = new Instafeed({
  get: 'tagged',
  tagName: '{{ page.instagram }}',
  sortBy: 'most-recent',
  clientId: {{ site.instagram.clientId }},
  accessToken: {{ site.instagram.accessToken }},
  template: {% raw %}'<figure><a href="{{model.images.standard_resolution.url}}" data-caption="{{caption}} &hearts; {{likes}}"><img class="lazyload" src="{% endraw %}{{ placeholder }}{% raw %}" data-src="{{model.images.low_resolution.url}}" alt="Picture" width="280" height="280"/></a></figure>', {% endraw %}
  after: function() {
    baguetteBox.run('.gallery');
  },
});

feed.run();