import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default {
  state: {
    todoList: [],
  },
  mutations: {
    initTodos(state, todos) {
      state.todoList = todos;
    },
  },
    getters: {
      filteredTodoList: function (state) {
        let filteredTodoList = [];
        for (let i = 0; i < state.todoList.length; i++) {
          if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
            filteredTodoList.push(state.todoList[i])
          }
        }
        return filteredTodoList;
      }
    },
    actions: {
      fetchTodos(context) {
        const url = "http://localhost:8099/packages";
        axios.get(url).then(function (reponse) {
          context.commit('initTodos', reponse.data);
        }).catch(function (error) {
          alert(error.reponse)
        })
      },
      createTodos(context, content) {
        console.log(content)
        const url = "http://localhost:8099/packages";
        axios.post(url, content).then(function (reponse) {
          context.dispatch('fetchTodos');
          alert("包裹入库成功！")
        }).catch(function (error) {
          alert(error)
        })
      },
      updateTodos(context, index) {
        const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos/" + index;
        axios.put(url, {
          "id": "",
          "content": "默认修改值",
          "status": "active"
        }).then(function (reponse) {
          context.dispatch('fetchTodos');
        }).catch(function (error) {
          alert(error)
        })
      }
    }
  }