var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm, col-6'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
        }),
        React.createElement('p', {}),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
        }),
        React.createElement('p', {}),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('p', {}),
        React.createElement('bUTTON', {type: 'submit'}, "Dodaj kontakt")
      )
    )
  },
})