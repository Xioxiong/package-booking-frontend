import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default {
  state: {

  },
  mutations: {

  },
  actions: {
    fetchTodos(context) {
      const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
      context.commit('startLoadding');
      axios.get(url).then(function (reponse) {
        context.commit('completeLoadding');
        context.commit('initTodos', reponse.data);
      }).catch(function (error) {
        alert(error.reponse)
      })
    },
    createTodos(context, content) {
      console.log(content)
      const url = "http://192.168.8.107:8099/packages";
      axios.post(url, content).then(function (reponse) {
        context.dispatch('fetchTodos');
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