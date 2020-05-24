import ko from 'knockout'

export class About    {
  constructor() {
    this.title = ko.observable('About');
    this.context = ko.observable('The project to review embedding Knockout component within Vue app for simpler front-end migration toward newer technologies.');
    this.summary = ko.observable('This page demonstrates hierarchy: Vue-Vue-Ko.');
  }

  template =
    `<h2 data-bind="text: title"></h2>
    <p class="mt-3" data-bind="text: context"></p>
    <strong data-bind="text: summary"></strong>`
}
