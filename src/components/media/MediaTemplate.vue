<template>
    <div class="media-container media-template-container six columns">
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
    methods: {
        // handleDecrement() {
        //     eventBus.$emit('sizeWasDecrease')
        // }
    },
    created() {
        eventBus.$on('sizeWasDecrease', (id)=>{
            var valObj = this.businessCardObj.filter(function(item){
                if(item.id == id) {
                    var el = document.getElementById(id);
                    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
                    var fontSize = parseFloat(style); 
                    el.style.fontSize = (fontSize - 1) + 'px';
                }
            });
        }),
        eventBus.$on('sizeWasIncrease', (id)=>{
            var valObj = this.businessCardObj.filter(function(item){
                if(item.id == id) {
                    var el = document.getElementById(id);
                    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
                    var fontSize = parseFloat(style); 
                    el.style.fontSize = (fontSize + 1) + 'px';
                }
            });
        }),
        eventBus.$on('fontColorWasChanged', (color, id)=>{
            var $this = this
                this.businessCardObj.filter(function(item){
                    if(item.id == id) {
                        var el = document.getElementById(id);
                        el.style.color = color
                    }
                });
        })
    }
}

</script>

<style>

    .logo-image img {
        max-width: 100%;
    }

























</style>
