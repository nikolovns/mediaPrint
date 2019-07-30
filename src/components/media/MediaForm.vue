<template>
   <div class="media-container media-form-container six columns">
        <h2>Form</h2>
        
         <ul>
             <li 
                 v-for="data in businessCardObj"
                 :key="data.id"
             >
                <span>
                    {{ splitData(data.name) }}
                </span>
                <span>
                    <keep-alive>
                        <component 
                            :is="checkDataType(data.type)"
                            :dataId="data.id"
                        ></component>
                    </keep-alive>
                </span>
             </li>
         </ul>
    </div> 
</template>


<script>
    import MediaText from './media_elements/MediaText.vue'
    import MediaFile from './media_elements/MediaFile.vue'
    import MediaColor from './media_elements/MediaColor.vue'

    export default {
        props: {
            businessCardObj: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                currentElement: 'app-media-file'
            }
        },
        methods: {
            splitData(key) {
                return key.split(/(?=[A-Z])/).join(' ').toUpperCase();
            },
            checkDataType(type) {
                if (type=='string') {
                    return 'app-media-text'
                } else if (type == 'file') {
                    return 'app-media-file'
                } else {
                    return 'app-media-color'
                }
            }
        },
        components: {
            'app-media-text': MediaText,
            'app-media-file': MediaFile,
            'app-media-color': MediaColor,
        }
    }

</script>
