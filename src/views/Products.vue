<template>
    <div class="products-main">

        <section class="products position-relative padding_sec" v-if="products">
            <div class="container">
                <div class="content">

                    <div class="d-flex justify-content-between table_head">
                        <h3 class="table_title text-capitalize">products</h3>
                        <button class="add_product" @click="addModalProduct">add product</button>
                    </div>

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

        

        <product-modal modalHead="add product" v-if="productAddModalStatus">
            <template v-slot:body-area>
                <form>
                    <div class="form-group d-flex align-items-center">
                        <label for="pname" class="d-none d-sm-block">name</label>
                        <input type="text" id="pname" placeholder="name" class="form-control our-input" v-model="addProduct.product_name"/>
                    </div>
                    <div class="form-group d-flex align-items-center">
                        <label for="pprice" class="d-none d-sm-block">price</label>
                        <input type="number" id="pprice" placeholder="price" class="form-control our-input" v-model="addProduct.product_price"/>
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
                        <textarea name="pdesc" id="pdesc" class="form-control" v-model="addProduct.product_desc"></textarea>
                    </div>
                </form>
            </template>

            <template v-slot:footer-area>
                <button>add</button>
                <button @click="ourCancelAddModal">cancel</button>
            </template>
        </product-modal>

    </div>
</template>

<script>
import axios from "axios";

import {mapMutations} from "vuex";

import { Sketch  } from 'vue-color';

export default {
    name: "Products",

    components: {
        'sketch-picker': Sketch,
    },

    data() {

        return {
            products: null,

            colors: "",

            pickedColors: [],

            editProduct: {
                product_name: "",
                product_price: "",
                product_desc: "",
                colors: "",
            },

            addProduct: {
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
        },
        productAddModalStatus: function () {
            return this.$store.state.productAddModalStatus;
        }

    },

    mounted() {

        axios.get("http://localhost:3000/lastProducts").then( res => {

            this.products = res.data;

        });

    },

    methods: {

        ...mapMutations(["cancelModal", "cancelAddModal"]),

        ourCancelModal: function () {
            this.cancelModal(!this.productModalStatus);
        },

        ourCancelAddModal: function () {
            this.cancelAddModal(!this.productAddModalStatus);
        },

        editModalProduct: function () {
            this.cancelModal(!this.productModalStatus);
        },

        addModalProduct: function () {
            this.cancelAddModal(!this.productAddModalStatus);
        },

        deleteTheProduct: function (index) {

            this.products.splice(index, 1);

        },

        addColor: function () {
            if (!this.pickedColors.includes(this.colors.hex)) {
                this.pickedColors.push(this.colors.hex);
                this.editProduct.colors = this.pickedColors;
                this.addProduct.colors = this.pickedColors;
            }

        },

        removeColor: function (index) {
            this.pickedColors.splice(index, 1)
        },

    }

}
</script>