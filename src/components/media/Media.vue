<template>
    <div class="media-main-container container">
        <h1>Media container</h1>
        
        <div class="row">
            <app-media-template
                ref="temp"
                :businessCardObj = "businessCard"
                :backgroundColor = "backgroundColor"
            ></app-media-template>
        
            <app-media-form
               :businessCardObj="businessCard"
            ></app-media-form>
        </div>
        
    </div>    
</template>


<script>
    import MediaTemplate from './MediaTemplate.vue'
    import MediaForm from './MediaForm.vue'

    import { eventBus } from '../../main';

    export default {
        data() {
            return {
                businessCard: [
                    {'name': 'personName', 'value': '', 'type': 'string', 'id':'1'},
                    {'name': 'personPosition', 'value': '', 'type': 'string', 'id':'2'},
                    {'name': 'company', 'value': '', 'type': 'string', 'id':'3'},
                    {'name': 'phoneNumber', 'value': '', 'type': 'string', 'id':'8'},
                    {'name': 'address', 'value': '', 'type': 'string', 'id':'4'},
                    {'name': 'email', 'value': '', 'type': 'string', 'id':'5'},
                    {'name': 'web', 'value': '', 'type': 'string', 'id':'6'},
                    {'name': 'logoImage', 'value': '', 'type': 'file', 'id':'7'},
                    {'name': 'backgroundColor', 'value': '', 'type': 'color', 'id':'9'},
                ],
                backgroundColor: 'transparent'
            }
        },
        components: {
            'app-media-template': MediaTemplate,
            'app-media-form': MediaForm,
        },
        methods: {
        },
        created() {
            eventBus.$on('dataWasChanged', (value, id)=>{
                var result = this.businessCard.filter(function(item){
                    if(item.id == id) {
                        item.value = value
                    }
                })
            }),
            eventBus.$on('fileWasUploaded', (url, id)=>{

                var valObj = this.businessCard.filter(function(item){
                    if(item.id == id) {
                        item.value = url;
                        return item.value;
                    }
                });
            }),
            eventBus.$on('colorWasChanged', (color, id)=>{
                var $this = this
                this.businessCard.filter(function(item){
                    if(item.id == id) {
                        $this.backgroundColor = color;
                    }
                });
            }),
            eventBus.$on('sizeWasDecrease', (id)=>{
                var valObj = this.businessCard.filter(function(item){
                    if(item.id == id) {
                        var el = document.getElementById(id);
                        var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
                        var fontSize = parseFloat(style); 
                        el.style.fontSize = (fontSize - 1) + 'px';
                    }
                });
            }),
            eventBus.$on('sizeWasIncrease', (id)=>{
                var valObj = this.businessCard.filter(function(item){
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
                    this.businessCard.filter(function(item){
                        if(item.id == id) {
                            var el = document.getElementById(id);
                            el.style.color = color
                        }
                    });
            })
            eventBus.$on('fileWasCleared', (id)=>{
                this.businessCard.filter(function(item){
                    if(item.id == id) {
                        item.value = '';
                        return item.value;
                    }
                });
            }),
            eventBus.$on('backgroundWasCleared', (id)=>{
                var $this = this;
                this.businessCard.filter(function(item){
                    if(item.id == id) {
                        $this.backgroundColor = 'transparent'
                    }
                });
            })
        }
    }
</script>

<style>    
    
</style>
