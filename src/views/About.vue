<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Car</th>
              <th scope="col">Date</th>
              <th scope="col">Transfer</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="car in cars" :key="car.id">
              <td>{{ car.id }}</td>
              <td>{{ car.name }}</td>
              <td>{{ car.created_at }}</td>
              <td>
                <router-link
                  :to="{ name: 'Detail', params: { name: car.name } }"
                >
                  <el-button type="success"
                    ><i class="fa fa-paper-plane"></i></el-button
                ></router-link>
              </td>
            </tr>
          </tbody>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      cars: "car/cars",
    }),
  },

  mounted() {
    this.getCars();
  },

  methods: {
    ...mapActions({
      getCars: "car/getCars",
    }),
  },
};
</script>
<style scoped>
.container {
  padding: 2rem;
  border: 1px solid #efefef;
  border-radius: 12px;
  margin-top: 3rem;
}
.select {
  width: 40%;
  float: left;
}
</style>
