import Ember from 'ember';

export default Ember.Route.extend({

    renderSmartWizard() {
    Ember.$('#smartwizard').smartWizard({
        enableAllSteps: true,
        noForwardJumping:false,
    });
  },

  actions: {
    didTransition() {
      Ember.run.next(this, 'renderSmartWizard');
    }
  }
});
