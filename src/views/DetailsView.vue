<script>
export default{
    data: function () {
        return {
          data : null,
        }
    },
    mounted() {
      this.data = this.$store.state.formDataList;
    }
}
</script>
<template>
  <div class="details" v-if="data && data.length > 0">
    <h1>Details</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in data" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.address}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>

</style>
