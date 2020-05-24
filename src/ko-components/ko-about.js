import ko from 'knockout'

export class About    {
  constructor() {
    this.title = ko.observable('About');
    this.context = ko.observable('Project ro review embedding Knockout component within Vue app for simpler front-end migration toward newer technologies');
  }

  template =
    `<h2 data-bind="text: title"></h2>
    <p data-bind="text: context"></p>`
}
