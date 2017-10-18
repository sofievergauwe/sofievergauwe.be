CMS.registerEditorComponent({
  id: "form",
  label: "Form",
  fields: [{name: 'name', label: 'Form name', widget: 'string'}],
  pattern: '^{% include form.html form="*(\([a-zA-Z]+\).+)" %}',

  fromBlock: function(match) {
    return {
      name: match[1]
    };
  },

  toBlock: function(obj) {
    return '{% include form.html form="' + obj.name + '" %}';
  },

  toPreview: function(obj) {
    return (
      '<p class="block"><strong>Form:</strong> ' + obj.name + '</p>'
    );
  }
});
