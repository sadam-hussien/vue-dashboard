<template>
    <div class="dahsborad-main">

        <section class="dashboard padding_sec position-relative">
            <div class="container">

                <div class="content">

                    <div class="row">

                        <div class="col-md-6 col-lg-4">
                            <div class="statistics">
                                <area-chart 
                                height="200px"
                                :data="userChart" 
                                :dataset="{
                                    backgroundColor: 'rgba(237, 147, 42, .5)',
                                    borderColor: 'rgba(237, 147, 42, 1)',
                                    pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                                    pointHoverBackgroundColor: 'rgba(237, 147, 42, 1)'}"
                                :library="GlobalChartOption"
                                ></area-chart>

                                <!-- start statis_precent  -->
                                <div class="statis_precent">

                                    <i class="fas fa-long-arrow-alt-up totop"
                                    style="background-color: rgba(237, 147, 42, 1)"
                                    v-if="parseInt(chartsPrecent.userPrecent) > 0"></i>

                                    <i class="fas fa-long-arrow-alt-down tobottom" 
                                    style="background-color: rgba(237, 147, 42, 1)"
                                    v-else></i>

                                    <span style="color: rgba(237, 147, 42, 1)">{{chartsPrecent.userPrecent}}</span>

                                </div>
                                <!-- // end statis_precent  -->

                                <!-- start statis_footer  -->
                                <div class="statis_footer d-flex align-items-center">

                                    <div class="icon" style="background-color: rgba(237, 147, 42, .2)">
                                        <i class="fas fa-user" style="color: rgba(237, 147, 42, 1)"></i>
                                    </div>

                                    <div class="detail">
                                        <h5 class="name m-0">users</h5>
                                        <h2 class="num">250</h2>
                                    </div>

                                </div>
                                <!-- // end statis_footer  -->

                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="statistics">
                                <area-chart 
                                height="200px"
                                :data="salesChart" 
                                :dataset="{
                                    backgroundColor: 'rgba(119, 128, 207, .5)',
                                    borderColor: 'rgba(119, 128, 207, 1)',
                                    pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                                    pointHoverBackgroundColor: 'rgba(119, 128, 207, 1)'}"
                                :library="GlobalChartOption"
                                ></area-chart>       

                                <!-- start statis_precent  -->
                                <div class="statis_precent">
                                    <i class="fas fa-long-arrow-alt-up totop"
                                    style="background-color: rgba(119, 128, 207, 1)"
                                    v-if="parseInt(chartsPrecent.salesPrecent) > 0"></i>

                                    <i class="fas fa-long-arrow-alt-down tobottom"
                                    style="background-color: rgba(119, 128, 207, 1)"
                                    v-else></i>

                                    <span style="color: rgba(119, 128, 207, 1)">{{chartsPrecent.salesPrecent}}</span>
                                </div>
                                <!-- // end statis_precent  -->

                                <!-- start statis_footer  -->
                                <div class="statis_footer d-flex align-items-center">

                                    <div class="icon" style="background-color: rgba(119, 128, 207, .2)">
                                        <i class="fas fa-cart-plus" style="color: rgba(119, 128, 207, 1)"></i>
                                    </div>

                                    <div class="detail">
                                        <h5 class="name m-0">sales</h5>
                                        <h2 class="num">1000</h2>
                                    </div>

                                </div>
                                <!-- // end statis_footer  -->

                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4">
                            <div class="statistics">
                                <area-chart 
                                height="200px"
                                :data="otherChart" 
                                :dataset="{
                                    backgroundColor: 'rgba(214, 159, 158, .5)',
                                    borderColor: 'rgba(214, 159, 158, 1)',
                                    pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                                    pointHoverBackgroundColor: 'rgba(214, 159, 158, 1)'}"
                                :library="GlobalChartOption"
                                ></area-chart>

                                <!-- start statis_precent  -->
                                <div class="statis_precent">
                                    <i class="fas fa-long-arrow-alt-up totop"
                                    style="background-color: rgba(214, 159, 158, 1)"
                                    v-if="parseInt(chartsPrecent.otherPrecent) > 0"></i>

                                    <i class="fas fa-long-arrow-alt-down tobottom"
                                    style="background-color: rgba(214, 159, 158, 1)"
                                    v-else></i>

                                    <span style="color: rgba(214, 159, 158, 1)">{{chartsPrecent.otherPrecent}}</span>
                                </div>
                                <!-- // end statis_precent  -->

                                <!-- start statis_footer  -->
                                <div class="statis_footer d-flex align-items-center">

                                    <div class="icon" style="background-color: rgba(214, 159, 158, .2)">
                                        <i class="fas fa-globe-europe" style="color:rgba(214, 159, 158, 1)"></i>
                                    </div>

                                    <div class="detail">
                                        <h5 class="name m-0">others</h5>
                                        <h2 class="num m-0">2500</h2>
                                    </div>

                                </div>
                                <!-- // end statis_footer  -->

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>

        <section class="dashboard-performace padding_sec position-relative">
            <div class="container">
                <div class="contetn">
                    
                    <!-- start performance  -->
                    <div class="row">

                        <div class="col">
                            <div class="performance_statis">
                                
                                <!-- start title  -->
                                <h3 class="title text-capitalize head_font">performance</h3>
                                <!-- // end title  -->

                                <column-chart 
                                height="350px"
                                :data="performaceChart"
                                :dataset="{
                                    backgroundColor: 'rgba(237, 147, 42, .5)',
                                    borderColor: 'rgba(237, 147, 42, 1)',
                                    pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                                    pointHoverBackgroundColor: 'rgba(237, 147, 42, 1)'}"
                                ></column-chart>
                            </div>
                        </div>

                    </div>
                    <!-- // end performance  -->

                </div>
            </div>
        </section>

        <section class="last_products padding_sec position-relative" v-if="products">
            <div class="container">
                <div class="content">

                    <h3 class="table_title text-capitalize">last products</h3>

                    <div class="products_table table-responsive">
                        <table class="table table-striped table-bordered text-center">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">price</th>
                                    <th scope="col">edit</th>
                                    <th scope="col">delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, index) in products" :key="product.id">
                                    <td class="td_id">{{product.id}}</td>
                                    <td class="td_name">{{product.product_name}}</td>
                                    <td class="td_price">{{product.product_price}}</td>
                                    <td class="td_edit"><button @click="editModalProduct"><i class="fas fa-edit"></i></button></td>
                                    <td class="td_delete"><button @click="deleteTheProduct(index)"><i class="fas fa-times"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>

        <product-modal modalHead="product edit" v-if="productModalStatus">
            <template v-slot:body-area>
                <form>
                    <div class="form-group d-flex align-items-center">
                        <label for="pname" class="d-none d-sm-block">name</label>
                        <input type="text" id="pname" placeholder="name" class="form-control our-input" v-model="editProduct.product_name"/>
                    </div>
                    <div class="form-group d-flex align-items-center">
                        <label for="pprice" class="d-none d-sm-block">price</label>
                        <input type="number" id="pprice" placeholder="price" class="form-control our-input" v-model="editProduct.product_price"/>
                    </div>
                    <div class="form-group">
                        <ul class="picked_colors list-unstyled p-0 d-flex justify-content-end">
                            <li 
                            v-for="(pickedColor, index) in pickedColors" 
                            :key="pickedColor" 
                            :style="{ 'background-color': pickedColor }"
                            @click="removeColor(index)">
                                <i class="fas fa-times"></i>
                            </li>
                        </ul>
                        <div class="d-flex position-relative align-items-center">
                            <label for="pcolor" class="d-none d-sm-block">color</label>
                            <sketch-picker v-model="colors" />
                            <button @click="addColor" type="button" class="btn_pick"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div class="form-group d-flex align-items-center">
                        <label for="pdesc" class="d-none d-sm-block">description</label>
                        <textarea name="pdesc" id="pdesc" class="form-control" v-model="editProduct.product_desc"></textarea>
                    </div>
                </form>
            </template>

            <template v-slot:footer-area>
                <button>save</button>
                <button @click="ourCancelModal">cancel</button>
            </template>
        </product-modal>

    </div>
</template>

<script>
import axios from "axios";

import {mapMutations} from "vuex";

import { Sketch  } from 'vue-color';

export default {
    name: "Dashboard",

    components: {
        'sketch-picker': Sketch,
    },

    data: function () {

        return {
            
            userChart: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]],
            salesChart: [["Jan", 3], ["Feb", 2], ["Mar", 4], ["Apr", 10], ["May", 5]],
            otherChart: [["Jan", 2], ["Feb", 4], ["Mar", 10], ["Apr", 3], ["May", 5]],
            performaceChart: [['Sun', 32], ['Mon', 46], ['Tue', 28], ['Wed', 20], ['Tur', 10], ['Fri', 50], ['Sat', 30]],

            GlobalChartOption: {
                scales: {
                    xAxes: [{
                        display: false // this hides the x-axis
                    }],
                    yAxes: [{
                        display: false // this hides the x-axis
                    }]
                }
            },

            chartsPrecent: {
                "userPrecent": 56 + "%",
                "salesPrecent": -20 + "%",
                "otherPrecent": 40 + "%"
            },

            products: null,

            colors: "",

            pickedColors: [],

            editProduct: {
                product_name: "",
                product_price: "",
                product_desc: "",
                colors: "",
            }

        }

    },

    computed: {

        productModalStatus: function () {
            return this.$store.state.productModalStatus;
        }

    },

    mounted() {

        axios.get("http://localhost:3000/lastProducts").then( res => {

            this.products = res.data;

        });

    },

    methods: {

        ...mapMutations(["cancelModal"]),

        ourCancelModal: function () {
            this.cancelModal(!this.productModalStatus);
        },

        editModalProduct: function () {
            this.cancelModal(!this.productModalStatus);
        },

        deleteTheProduct: function (index) {

            this.products.splice(index, 1);

        },

        addColor: function () {
            if (!this.pickedColors.includes(this.colors.hex)) {
                this.pickedColors.push(this.colors.hex);
                this.editProduct.colors = this.pickedColors;
            }

        },

        removeColor: function (index) {
            this.pickedColors.splice(index, 1)
        },

    }

}
</script>