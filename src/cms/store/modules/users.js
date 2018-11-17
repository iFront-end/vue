import {router} from '../../../app';

const state = {
  user: null
};

const getters = {

};

const actions = {
  auth({commit}, {login, password}) {
    if (login === 'admin' && password === 'admin') {
      router.push({ path: `/admin/dashboard` })
    }
  }
};

const mutations = {

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
