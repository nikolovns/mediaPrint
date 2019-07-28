<template>
    <div class="media-main-container container">
        <h1>Media container</h1>
        
        <div class="row">
            <app-media-template
                :businessCardObj="businessCard"
            ></app-media-template>
        
            <app-media-form
               :businessCardObj="businessCard"
                @dataWasChanged="changeData"
                @fileWasUploaded="uploadFile"
            ></app-media-form>
        </div>
        
    </div>    
</template>


<script>
    import MediaTemplate from './MediaTemplate.vue'
    import MediaForm from './MediaForm.vue'

    export default {
        data() {
            return {
                businessCard: [
                    {'name': 'personName', 'value': '', 'type': 'string', 'id':'1'},
                    {'name': 'personPosition', 'value': '', 'type': 'string', 'id':'2'},
                    {'name': 'company', 'value': '', 'type': 'string', 'id':'3'},
                    {'name': 'address', 'value': '', 'type': 'string', 'id':'4'},
                    {'name': 'email', 'value': '', 'type': 'string', 'id':'5'},
                    {'name': 'web', 'value': '', 'type': 'string', 'id':'6'},
                    {'name': 'logoImage', 'value': '', 'type': 'file', 'id':'7'},
                    {'name': 'backgroundImage', 'value': '', 'type': 'file', 'id':'8'},
                    {'name': 'backgroundColor', 'value': '', 'type': 'color', 'id':'9'},
                ]
            }
        },
        components: {
            'app-media-template': MediaTemplate,
            'app-media-form': MediaForm,
        },
        methods: {
            changeData(e, value, id) {
                var result = this.businessCard.filter(function(item){
                    if(item.id == id) {
                        item.value = value
                    }
                })
            },
            uploadFile(url, id) {
                var valObj = this.businessCard.filter(function(item){
                    
                    if(item.id == id) {
                        item.value = url;
                        return item.value;
                    }

                });
            }
        }
    }
</script>

<style>
    .media-main-container {
        height: 100%;
    }
    
    .media-main-container .row,
    .media-main-container .row > * {
        height: 100%;
    }
    
    .media-container {
        border: 1px solid blue
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
</style>
