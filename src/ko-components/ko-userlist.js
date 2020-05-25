import ko from 'knockout';
import Vue from 'vue';
import UserDetails from "../components/UserDetails";

export class KoUserlist    {
  constructor(data) {
    this.title = ko.observable('User List');
    this.summary = ko.observable('This page demonstrates hierarchy: Vue-Vue-Ko.');
    this.userList = ko.observableArray(data.users);
    this.isEditMode = ko.observable(false);

    this.cancelForm = () =>{
      this.isEditMode(false);
    }

    const vueUserDetailsComponent = Vue.extend(UserDetails);
    this.openEditForm = (value) => {
      console.log(value);
      this.isEditMode(true);
      new vueUserDetailsComponent({el: '#edit-user-form', propsData: { user: value, cancel: this.cancelForm }});
    };
  }

  template =
    `
<h2 data-bind="text: title"></h2>    
<strong class="mt-3" data-bind="text: summary"></strong> 
<!-- ko if: isEditMode -->  
    <div id="edit-user-form"></div>
 <!-- /ko -->
<table class="mt-3 table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th> 
      <th scope="col"></th>  
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
      <td data-bind="text:$data.address"></td>
      <td><button class="btn-primary" data-bind="click: $parent.openEditForm">Edit</button></td>   
    </tr>  
    <!-- /ko -->  
  </tbody>
</table>    
    `
}
