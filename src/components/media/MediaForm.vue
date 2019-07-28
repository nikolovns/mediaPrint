<template>
   <div class="media-container media-form-container six columns">
        <h2>Form</h2>
         <!-- <input type="file" 
             @change="objectUrlCreate"
         /> -->
         
         <ul>
             <li 
                 v-for="data in businessCardObj"
                 :key="data.id"
             >
                {{ splitData(data.name) }}
                <template v-if="data.type == 'string'">
                   <div>
                       <input type="text" 
                       @input="changeData($event, data.id)">
                   </div>
                </template>
                <template v-else-if="data.type == 'file'">
                   <div>
                       <input type="file" name="" :id="data.id"
                            @change="objectUrlCreate($event, data.id)"
                        />
                   </div>
                </template>
                <template v-else>
                    <div>
                        <input type="color" name="" id="">
                    </div>
                </template>
             </li>
         </ul>
    </div> 
</template>


<script>
    export default {
        props: ['businessCard', 'businessCardObj'],
        data() {
            return { 
            }
        },
        methods: {
            changeData($event, id) {
                var value = $event.target.value
                this.$emit('dataWasChanged', $event, value, id)
            },
            objectUrlCreate(e, id) {
                var objectUrl = e.target.files[0];
                var url = URL.createObjectURL(objectUrl);
                
               this.$emit('fileWasUploaded', url, id)
            },
            splitData(key) {
                return key.split(/(?=[A-Z])/).join(' ').toUpperCase();
            }
        },

    }

</script>
