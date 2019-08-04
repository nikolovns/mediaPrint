<template>
    <div class="row">
        <div class="page-title col-md-12">
            <h1>Shopping Card</h1>
        </div>
        <div class="col-md-12">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product Image</td>
                        <td>Product Name</td>
                        <td>
                            <label for="quantity">Quantity</label>
                            <input type="text" id="quantity">
                        </td>
                        <td>
                            <input type="button" value="remove">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
