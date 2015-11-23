import computed from "ember-addons/ember-computed-decorators";

export default Ember.TextField.extend({
  attributeBindings: ['autocorrect', 'autocapitalize', 'autofocus', 'maxLength'],

  @computed("placeholderKey")
  placeholder(placeholderKey) {
    return placeholderKey ? I18n.t(placeholderKey) : "";
  },

  keyUp() {
    const act = this.get('keyUpAction');
    if (act) {
      this.sendAction('keyUpAction');
    }
  }
});
