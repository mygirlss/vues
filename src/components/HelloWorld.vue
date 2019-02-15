<template>
  <div class="hello">
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <ul>
                <sloft-slo @propss="xyq" >
                    <div slot-scope="a">
                        {{a}}
                    </div>
                </sloft-slo>
                <sloft-slotwo ></sloft-slotwo>
                <li v-for = "items in item" v-if="items!=2">
                    <input type="checkbox" id="checkbox" v-model="checked"/>
                    <input type="checkbox" id="checkbox" value="yanqi1" v-model="checkName"/>
                    <input type="checkbox" id="checkbox" value="yanqi2" v-model="checkName"/>
                    <input type="checkbox" id="checkbox" value="yanqi3" v-model="checkName"/>
                    <input type="checkbox" id="checkbox" value="yanqi4" v-model="checkName"/>
                    <label for="checkbox">{{ checked }}</label>
                    <label for="checkbox">{{ checkName }}</label>
                    <h1>{{ msg }}</h1>
                    <h2>Essential Links</h2>
                    <div class="block">
                        <span class="demonstration">默认不区分颜色</span>
                        <el-rate v-model="value1"></el-rate>
                    </div>
                    <div class="block">
                        <span class="demonstration">区分颜色</span>
                        <el-rate
                            v-model="value2"
                            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                        </el-rate>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
  </div>
</template>
<script>
import BScroll from 'better-scroll';
import SloftSlo from './SloftSlo';
import SloftSlotwo from './SloftSlotwo';
export default {
    components: {
      'sloft-slo': SloftSlo,
      'sloft-slotwo': SloftSlotwo,
    },
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            checked:false,
            checkName:[],
            item:[1,2,3,5,6,7],
            value1: 2,
            value2: 2,
            // mesg:{
            //     name:'xiaoffaaa',
            //     old:'26'
            // }
        }
    },
    mounted() {
    //即定时器 20ms
        this.$nextTick(() => {
        //$refs绑定元素
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.wrapper, {
            //开启点击事件 默认为false
                click:true
                
            })
        // console.log(this.scroll)
        }else if(!this.$refs.wrapper){
            return
        }
        else{
            this.scroll.refresh()
        }
      })
    },
    methods: {
        xyq:function(msg){
            this.mesg.name = msg;
            console.log(msg)
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../style/hell'
</style>
