<template>
    <div class="row">
        <div class="page-title col-md-12 columns">
            <h1>User Details</h1>
        </div>
        <form class="row col-md-12 columns" action="" @submit.prevent="saveChanges">
            <div class="col-sm-12 col-md-6 columns">
                <h2>Double click to change your data</h2>
                <p @click="showData">Personal Data</p>
                
                <div>
                    <label for="">User name</label>
                    <input type="text" v-model="userData[0].name" />
                </div>

                <div>
                    <label for="">E-mail</label>
                    <input type="text" v-model="userData[0].email" />
                </div>

                <div>
                    <label for="">Web page</label>
                    <input type="text" v-model="userData[0].web" />
                </div>
                
            </div>
            <div class="col-sm-12 col-md-6 columns">
                <h2>Fill the data if you want to order some of your products</h2>
                <p>Delivery address</p>

                <div>
                    <label for="">Phone number</label>
                    <input type="text" v-model="userData[0].phone" />
                </div>

                <div>
                    <label for="">Delivery address</label>
                    <input type="text" v-model="userData[0].address" />
                </div>
            </div>
            <div class="col-md-12 columns">
                <button class="btn btn-primary" type="submit">Save</button>
            </div>
        </form>
    </div>
    
</template>

<script>
export default {
    props: {
        userData: {
            type: Array,
            require: true
        }
    },
    methods: {
        showData() {
            console.log(this.userData)
        },
        saveChanges() {
            this.$router.push('/')
        }
    }
}
</script>

