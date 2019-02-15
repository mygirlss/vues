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
    changeOld(state,old){
        state.mesg.map(item => {
            item.old -= old
        })
    }
}
export default {
    state,
    getters,
    mutations
}