<template>
    <div class="media-container media-template-container six columns">
        <h2>Template</h2>
        
        <div
            v-for="data in businessCardObj"
            :key="data.id"
        >
            <template v-if="data.type == 'file'">
                <img :src="data.value" alt="">
            </template>
            <template v-else-if="data.type == 'string'">
                <p>{{data.value}}</p>
            </template>
            <template v-else>
                <p>{{data.value}}</p>
            </template>
            
        </div>
        
    </div> 
</template>


<script>
export default {
    props: ["dataMsg", "businessCardObj", "businessCard"],
}

</script>

<style>

    .logo-image img {
        max-width: 100%;
    }

























</style>
