export default class PaletteFormFields {
  constructor(formFields) {
    this._formFields = formFields;
  }

  findType(type) {
    return this.all().find(entry => entry.type === type);
  }

  all() {
    return this._formFields.all()
      .filter(({ config: fieldConfig }) => fieldConfig.type !== 'default')
      .map(({ config: fieldConfig }) => {
        return {
          label: fieldConfig.label,
          type: fieldConfig.type,
          group: fieldConfig.group
        };
      });
  }
}

PaletteFormFields.$inject = [ 'formFields' ];
