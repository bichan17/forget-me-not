(function (global) {
  'use strict';

  var app = {};
  console.log("Begin!");
  var service = require('./service.js');

  var listService = service.get('lists');
  var taskService = service.get('tasks');



  listService.all()
    .done(function (lists) {
      /* do stuff */
      console.log("-----getting lists-----");
      handleLists(lists);
    })
    .fail(function () {
      console.error('there was a problem with lists');
    });


  function handleLists(lists){
    for (var i = 0; i < lists.length; i++) {
      console.log(lists[i].title + ": " + lists[i].id);
      loadTasks(lists[i].id);
    };
    app.lists = lists;
  }
  function loadTasks(listID){
    taskService.forList(listID).done(function(taskData){
    // console.log('loadTasks: ' + listID);

      handleTasks(taskData);

    }).fail(function(){
      console.log('there was a problem with tasks');
    });

  }
  function handleTasks(taskData){

    app.tasks = taskData;
    taskData.forEach(function (task) {
      console.log("TASK: " + task.title);
    });

    // console.log(app.tasks);

  }

})(this);