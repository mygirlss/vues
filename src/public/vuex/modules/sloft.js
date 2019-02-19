const state = { 
    mesg:[{
        name:'xiaoffaaaa',
        old:26
    }]
}
const getters = {
    changeName:(state) => {
        let myName = state.mesg.map(item => {
            return {
                name:item.name,
                old:item.old+5
            }
        })
        return myName;
    }
}
const mutations = {
    changeOlds(state,old){
        state.mesg.map(item => {
            item.old -= old
        })
    },
    changeNames(state,name){
        state.mesg.forEach(item => {
            item.name = name
        });
    }
}
const actions = {
    changes({commit},name){
        setTimeout(() => {
            commit('changeNames','飞的提克吗');
        },1000)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}