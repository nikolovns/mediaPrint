<template>

    <div>
        <input type="text"
            @input="changeData($event, dataId)"
        />
        <input 
            type="button" 
            value="-"
            @click="decrease(dataId)"
        >
        <input 
            type="button" 
            value="+"
            @click="increase(dataId)"
        >
        <input type="color" name="" id=""
            @change="changeFontColor($event, dataId)"
        >
    </div>
    
</template>

<script>
import { eventBus } from '../../../main';

export default {
    name: 'app-media-text',
    props: {
        dataId: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        changeData($event, id) {
            var value = $event.target.value;
            eventBus.$emit('dataWasChanged', value, id)
        },
        decrease(id) {
            eventBus.$emit('sizeWasDecrease', id);
        },
        increase(id) {
            eventBus.$emit('sizeWasIncrease', id)
        },
        changeFontColor(e, id) {
            var color = e.target.value;
            eventBus.$emit('fontColorWasChanged', color, id)
        }
    }
}
</script>

<style>

</style>


