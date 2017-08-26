var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage, col-6',
          src: 'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
        }),
        React.createElement('p', {className: 'contactLabel, col-3'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel, col-3'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail, col-3', href: 'mailto:' + this.props.item.email},
          this.props.item.email
        )
      )
    )
  },
});