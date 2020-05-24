import ko from 'knockout'

export class KoUserlist    {
  constructor(data) {
    this.title = ko.observable('User List');
    this.summary = ko.observable('This page demonstrates hierarchy: Vue-Vue-Ko.');
    this.userList = ko.observableArray(data.users);
  }

  template =
    `<h2 data-bind="text: title"></h2>    
    <strong class="mt-3" data-bind="text: summary"></strong>   
   
<table class="mt-3 table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>   
    </tr>
  </thead>
  <tbody> 
  <!-- ko foreach: userList -->
    <tr>
      <th scope="row" data-bind="text: ($index() + 1)"></th>
      <td data-bind="text:$data.firstName"></td>
      <td data-bind="text:$data.lastName"></td>
      <td data-bind="text:$data.username"></td>
      <td data-bind="text:$data.email"></td>     
    </tr>  
    <!-- /ko -->  
  </tbody>
</table>    
    `
}
