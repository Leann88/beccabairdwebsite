import Ember from 'ember';

export default Ember.Route.extend({

    renderSmartWizard() {
    Ember.$('#smartwizard').smartWizard({
        enableAllSteps: true,
        noForwardJumping:false,
        useURLhash: false,
        selected: 0,
    });

    window.scrollTo(0,0);
  },

  actions: {
    didTransition() {
      Ember.run.next(this, 'renderSmartWizard');
    }
  }
});
