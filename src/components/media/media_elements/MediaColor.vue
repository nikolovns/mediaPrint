<template>

    <div>
        <input type="color" name="" id=""
            @change="changeColor($event, dataId)"
        />
        <input type="button" value="Clear"
            @click="clearBackground(dataId)"
        />
    </div>

    
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
        },
        clearBackground(id) {
            eventBus.$emit('backgroundWasCleared', id);
        }
    }
}
</script>