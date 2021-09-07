<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <p class="head">Production</p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                <i class="el-icon-check"></i>
              </th>
              <th scope="col">ID</th>
              <th scope="col">Vin</th>
              <th scope="col">Car</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>
                <input
                  type="checkbox"
                  :value="product"
                  v-model="transfer.data"
                  :id="product.id"
                />
              </td>
              <td>{{ product.id }}</td>
              <td>{{ product.vin }}</td>
              <td>{{ product.car.name }}</td>
            </tr>
          </tbody>
          <tbody></tbody>
        </table>
      </div>
      <div class="col-md-2">
        <br />
        <hr />
        <p v-if="transfer.data == ''">
        <el-button
          type="success"
          plain
          @click.prevent="right"
          :loading="loading"
          disabled
          >Right <i class="el-icon-right"></i
        ></el-button>
        </p>
        <p v-else>
        <el-button
          type="success"
          plain
          @click.prevent="right"
          :loading="loading"
          >Right <i class="el-icon-right"></i
        ></el-button>
        </p>
        <hr />
        <p v-if="back.data == ''">
        <el-button
          type="primary"
          plain
          @click.prevent="lefttransfer"
          :loading="left"
          disabled
          ><i class="el-icon-back"></i> Left</el-button
        >
        </p>
        <p v-else>
        <el-button
          type="primary"
          plain
          @click.prevent="lefttransfer"
          :loading="left"
          ><i class="el-icon-back"></i> Left</el-button
        >
        </p>
        <hr />
        <router-link :to="{ name: 'About' }" class="back"
          ><el-button type="danger"> Back</el-button></router-link
        >

        <router-view />
        <hr />
      </div>
      <div class="col-md-5">
        <p class="head">Hold</p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col"><i class="el-icon-check"></i></th>
              <th scope="col">ID</th>
              <th scope="col">Vin</th>
              <th scope="col">Car</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="hold in holds" :key="hold.id">
              <td>
                <input
                  type="checkbox"
                  :value="hold"
                  v-model="back.data"
                  :id="hold.id"
                />
              </td>
              <td>{{ hold.id }}</td>
              <td>{{ hold.vin }}</td>
              <td>{{ hold.car.name }}</td>
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
import axios from "axios";
import NProgress from "nprogress";

export default {
  data() {
    return {
      transfer: {
        data: [],
      },
      back: {
        data: [],
      },
      loading: false,
      left: false,
    };
  },

  props: ["name"],

  computed: {
    ...mapGetters({
      products: "car/product",
      holds: "car/hold",
    }),

  
  },

  mounted() {
    this.getProducts(this.name);
    this.getHolds(this.name);
  },

  methods: {
    ...mapActions({
      getProducts: "car/getProducts",
      getHolds: "car/getHolds",
    }),

    right() {
      console.log(this.transfer);
      this.loading = true;
      NProgress.start();
      if (this.transfer.data == "") {
        this.$notify({
          title: "Field is Required",
          message: "Error",
          type: "error",
        });
        NProgress.done();
        this.loading = false;
        this.getProducts(this.name);
        this.getHolds(this.name);
      } else {
        axios
          .post("http://127.0.0.1:8000/api/transfer", this.transfer, {
            headers: {
              "Content-type": "application/json",
            },
          })
          .then((response) => {
            setTimeout(() => {
              console.log(response.data);
              this.$notify({
                title: "Transfer",
                message: "Done",
                type: "success",
              });
              NProgress.done();
              this.loading = false;
              this.getProducts(this.name);
              this.getHolds(this.name);
              this.transfer.data = [];
            }, 10);
          })
          .catch((err) => {
            setTimeout(() => {
              console.log(err);
              this.$notify({
                title: "Error",
                message: "Something Wrong",
                type: "error",
              });
              NProgress.done();
              this.loading = false;
              this.getProducts(this.name);
              this.getHolds(this.name);
            }, 10);
          });
      }
    },

    lefttransfer() {
      console.log(this.back);
      this.left = true;
      NProgress.start();
      if (this.back.data == "") {
        this.$notify({
          title: "Field is Required",
          message: "Error",
          type: "error",
        });
        NProgress.done();
        this.left = false;
        this.getProducts(this.name);
        this.getHolds(this.name);
      } else {
        axios
          .post("http://127.0.0.1:8000/api/backTransfer", this.back, {
            headers: {
              "Content-type": "application/json",
            },
          })

          .then((response) => {
            setTimeout(() => {
              console.log(response.data);
              this.$notify({
                title: "Back",
                message: "Done",
                type: "success",
              });
              NProgress.done();
              this.left = false;
              this.getProducts(this.name);
              this.getHolds(this.name);
              this.back.data = [];
            }, 10);
          })
          .catch((err) => {
            setTimeout(() => {
              console.log(err);
              this.$notify({
                title: "Error",
                message: "Something Wrong",
                type: "error",
              });
              NProgress.done();
              this.left = false;
              this.getProducts(this.name);
              this.getHolds(this.name);
            }, 10);
          });
      }
    },
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

.head {
  float: left;
  font-size: 16px;
  font-weight: 600;
}
</style>
