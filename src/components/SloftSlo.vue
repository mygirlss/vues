<template>
    <div>
        <h1 @click="aini">123</h1>
        <slot say="爱你"></slot>
        {{names}}
        <p @click = "changeOld">how old are you ?</p>
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
    // props:{
    //     names:{
    //         type:Object,
    //         default(){
    //             return {
    //                 name:'yanqiya',
    //                 old:'24'
    //             }
    //         }
    //     }
    // },
    methods: {
        aini(){
            this.$emit('propss',this.name)
        },
        changeOld(){
            this.$store.commit('changeOld',2)
        }
    },
}
</script>>