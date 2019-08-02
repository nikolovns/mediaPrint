<template>
    <div class="media-container media-template-container col-md-6 columns">
        <h2>Template</h2>

        <div 
            class="media-type-container"
            :style='{"background-color": this.backgroundColor}'
        >
            <div
                v-for="data in businessCardObj"
                :key="data.id">

                <template v-if="data.type == 'file'">
                    <img :src="data.value" alt="">
                </template>
                <template v-else-if="data.type == 'string'">
                    <p :id="data.id">{{data.value}}</p>
                </template>
                <template v-else>
                    <p>{{data.value}}</p>
                </template>
                
            </div>
        </div>
        
        
        
    </div> 
</template>


<script>

import { eventBus } from '../../main';

export default {
    props: ["businessCardObj", "businessCard", "backgroundColor"],
    data() {
        return {
            
        }
    },
    methods:{
    },
    created() {
        
        
    }
}

</script>

<style scoped>

    .media-type-container{
        border: 1px solid #ccc;
        height: 226px;
        width: 340px;
        padding: 15px;
        box-sizing: border-box;
    }
    .media-type-container div {
        line-height: 1;
    }
    .media-type-container p {
        margin: 0;
    }

    img {
        width: 30%;
        min-width: 100px;
    }

</style>
