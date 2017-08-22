import Ember from 'ember';

export default Ember.Component.extend({
    click(event) {
    this._super(...arguments);
    if(Ember.$(event.target).hasClass('nav-link')) {
      this.$().find('.collapse').collapse('hide');
    }
  },
});
