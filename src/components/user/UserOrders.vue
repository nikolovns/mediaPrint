<template>
    <div class="row">
        <div class="page-title col-md-12 columns">
            <h1>User Products</h1>
        </div>
        <div class="row col-md-12 columns">
            <div class="col-sm-12 col-md-6 columns" v-for="order in userOrders" :key="order.id">
                <p><span>Order number: </span>{{order.id}}</p>
                <p><span>Product name: </span>{{order.productName}}</p>
                <p><span>Your name: </span>{{order.userName}}</p>
                <p><span>Phone number: </span>{{order.phone}}</p>
                <p><span>Delivery address: </span>{{order.address}}</p>
                <p><span>Order quantity: </span>{{order.quantity}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userOrders: {
            type: Array
        }
    }
    
}
</script>
