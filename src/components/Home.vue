<script setup>
import { todoStore } from '../store/todos';

const store = todoStore()
const addClick = () => {
  const id = store.todos.length + 1;
  store.addTodo({
    index: id,
    title: "abc",
    editable: false
  });

  console.log(store.todos)
};

const editBtn = (index) => {
  store.updateEditable(index, true);
};

const enterPress = (index, title) => {
  store.updateTodo(index, title);
};

</script>

<template>
  <div class="right-0">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      @click="addClick">+</button>
  </div>

  <div class="w-full bg-white rounded-lg shadow-lg lg:w-1/3">
    <ul class="divide-y-2 divide-gray-400">
      <li class="flex justify-between p-3 hover:bg-blue-600 hover:text-blue-200" v-for="todo in store.todos">
        <input type="hidden" value="{{ todo.index }}">
        <input type="text" value="{{ todo.title }}" v-if="todo.editable" v-on:keyup.enter="">
        <label v-if="!todo.editable">{{ todo.title }}</label>
        
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" @click="editBtn(todo.index)">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </li>
    

    </ul>
  </div>
</template>

<style scoped>

</style>
