import { defineStore } from "pinia";
import { ref } from "vue";

export const todoStore = defineStore("todo", () => {
    const todos = ref([]);

    const addTodo = (todo) => {
        todos.value.push(todo);
    }

    const updateTodo = (index, title) => {
        todos.value[index - 1].title = title;
    }

    const updateEditable = (index, editable) => {
        todos.value[index - 1].editable = editable;
    }

    return {
        todos,
        addTodo,
        updateTodo,
        updateEditable
    }

});