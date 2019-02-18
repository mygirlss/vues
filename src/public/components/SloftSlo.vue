<template>
    <div>
        <h1 @click="aini">123</h1>
        <slot say="爱你"></slot>
        {{namesa}}
        <p @click = "changeOld">how old are you ?</p>
        <p @click = "changeNames">who are you ?</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aa:'',
            name:'xjj',
            names:this.$store.getters.changeName
        }
        
    },
    props:{
        namesa:{
            type:Object,
            default(){
                return {
                    name:'yanqiya',
                    old:'24'
                }
            }
        }
    },
    methods: {
        aini(){
            this.$emit('propss',this.name)
        },
        changeOld(){
            this.$store.commit('changeOlds',2)
        },
        changeNames(){
            this.$store.dispatch('changes','飞的提克')
        }
    },
}
</script>>