<template>
    <input type="color" name="" id=""
        @change="changeColor($event, dataId)"
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
        changeColor(e, id) {
            var color = e.target.value;
            eventBus.$emit('colorWasChanged', color, id)
        }
    }
}
</script>