var CapationAlignControl = createClass({

  handleChangeVer: function(e) {
    var values = this.props.value.split(' ');
    values[0] = e.target.value
    this.props.onChange(values.join(' '));
  },

  handleChangeHor: function(e) {
    var values = this.props.value.split(' ');
    values[1] = e.target.value
    this.props.onChange(values.join(' '));
  },


  render: function() {

    var value = ['middle', 'center']
    if (this.props.value) {
      value = this.props.value.split(' ');
    }

    return h('div', {className: 'group'},
      h('select', { style: {'margin-right': '4px' }, name: 'valign', type: 'select', value: value[0], onChange: this.handleChangeVer },
        h('option', {}, 'top'),
        h('option', {}, 'middle'),
        h('option', {}, 'bottom'),
      ),
      h('select', { style: {'margin-left': '4px' }, name: 'halign', type: 'select', value: value[1], onChange: this.handleChangeHor },
        h('option', {}, 'left'),
        h('option', {}, 'center'),
        h('option', {}, 'right'),
      ),
    );
  }
});

var CapationAlignPreview = createClass({
  render: function() {
    return this.props.value.join(' ');
  }
});

CMS.registerWidget('captionalign', CapationAlignControl, CapationAlignPreview);
