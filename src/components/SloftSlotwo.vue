<template>
    <div>
        <h1 @click="aini">123</h1>
        {{names}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            aa:'',
            name:'xjj',
            names:this.$store.state.sloft.mesg
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
        aini:function(){
            this.$emit('propss',this.name)
        }
    },
}
</script>>