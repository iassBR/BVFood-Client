<template>
  <div>
    <!-- About Tenant and Categories -->
    <h1 class="my-4 title-tenant text-center">Nome do Tenant</h1>
    <div class="row">
      <div class="list-categories">
        <a
          href=""
          class="list-categories__item active"
          v-for="(category, index) in categories"
          :key="index"
        >
          {{ category.name }}
        </a>
      </div>
    </div>
    <!-- Cards Produtos -->
    <div class="row my-4">
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card--flat h-100">
          <a href="#">
            <div class="card-image">
              <img class="card-img-top" src="imgs/pizza.png" alt="" />
            </div>
          </a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Pizza</a>
            </h4>
            <h5>R$ 12,99</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur!
            </p>
          </div>
          <div class="card-footer card-footer-custom">
            <a href="carrinho.html"
              >Adicionar no Carrinho <i class="fas fa-cart-plus"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card--flat h-100">
          <a href="#">
            <div class="card-image">
              <img class="card-img-top" src="imgs/acai.png" alt="" />
            </div>
          </a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Açai na Tijela</a>
            </h4>
            <h5>R$ 12,99</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur! Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="card-footer card-footer-custom">
            <a href="carrinho.html"
              >Adicionar no Carrinho <i class="fas fa-cart-plus"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="disabled card--flat h-100">
          <a href="#">
            <div class="card-image">
              <img class="card-img-top" src="imgs/lanches.png" alt="" />
            </div>
          </a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Sanduiche</a>
            </h4>
            <h5>R$ 12,99</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur! Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="card-footer card-footer-custom">
            <a href="carrinho.html"
              >Adicionar no Carrinho <i class="fas fa-cart-plus"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card--flat h-100">
          <a href="#">
            <div class="card-image">
              <img class="card-img-top" src="imgs/pizza.png" alt="" />
            </div>
          </a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Pizza</a>
            </h4>
            <h5>R$ 12,99</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur! Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="card-footer card-footer-custom">
            <a href="carrinho.html"
              >Adicionar no Carrinho <i class="fas fa-cart-plus"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card--flat h-100">
          <a href="#">
            <div class="card-image">
              <img class="card-img-top" src="imgs/japonesa.png" alt="" />
            </div>
          </a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Japonesa</a>
            </h4>
            <h5>R$ 12,99</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur! Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="card-footer card-footer-custom">
            <a href="carrinho.html"
              >Adicionar no Carrinho <i class="fas fa-cart-plus"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card--flat h-100">
          <a href="#">
            <div class="card-image">
              <img class="card-img-top" src="imgs/acai.png" alt="" />
            </div>
          </a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Açai na Tijela</a>
            </h4>
            <h5>R$ 12,99</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              numquam aspernatur! Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div class="card-footer card-footer-custom">
            <router-link :to="{ name: 'cart' }"
              >Adicionar no Carrinho <i class="fas fa-cart-plus"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["companyUrl"],

  created() {
    if (this.company.name === "") {
      return this.$router.push({ name: "home" });
    }
    console.log(this.company.uuid);
    this.getCategoriesByCompany(this.company.uuid).catch((response) => {
      this.$vToastify.error(
        "Falha ao carregar as categorias. Tente novamente mais tarde",
        "Ops !"
      );
    });
  },

  computed: {
    ...mapState({
      company: (state) => state.companies.companySelected,
      categories: (state) => state.companies.companySelected.categoriesCompany,
    }),
  },

  methods: {
    ...mapActions(["getCategoriesByCompany"]),
  },
};
</script>