<template>
    <input type="file" name="" :id="dataId"
        @change="objectUrlCreate($event, dataId)"
    />
</template>

<script>
import { eventBus } from '../../../main';

export default {
    props: {
        dataId: {
            type: String,
            required: true
        }
    },
    methods: {
        objectUrlCreate(e, id) {
            var objectUrl = e.target.files[0];
            var url = URL.createObjectURL(objectUrl);
            
            eventBus.$emit('fileWasUploaded', url, id)
        }
    }
}
</script>

