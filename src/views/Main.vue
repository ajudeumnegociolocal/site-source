<template>
    <div>

       
        <!-- shape Hero -->
            <section class="section-default">
                <div class="container">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col">
                                <p class="lead  text-white">Olá! Criamos esse site para ajudarmos nossos estabelecimentos favoritos durante esse momento desafiador. A ideia é doarmos um valor, que será revertido em um crédito nesses lugares até dezembro de 2020. 
<br />Na torcida para que tudo isso passe logo!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
           
      
        <section class="mt-50">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4 mb-50" v-for="negocio in negocios" :key="negocio.nid">
                                <card class="border-0" hover shadow body-classes="py-5 text-center">
                                    <img height="200px" :src="negocio.img" />
                                    <p class="description mt-3">{{ negocio.description }} </p>
                                    <base-button tag="a" :href="negocio.doeURL" :type="negocio.buttonType" class="mt-4">
                                        Doe agora
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data: function() { 
      
      return {
        negocios: [
            { nid: 4, img: "img/new-shin.png", description: "Churrasco Coreano", buttonType: "success", doeURL: "https://pagseguro.uol.com.br/checkout/nc/sender-identification.jhtml?t=de2e16e63359bc9012c3395445d862e7e5fb548fc047b288&e=true#rmcl"},
          { nid: 4, img: "img/bonometti.jpg", description: "Casa Bonometti", buttonType: "success", doeURL: "https://pag.ae/7VSEKee13"  },
          {nid: 3, img: "img/veredas.jpeg" , description: "Cozinha Vegana", buttonType: "success", doeURL: "https://pag.ae/7VSE2NFTM"  },
          { nid: 1, img: "https://www.bananaverde.com.br/wp-content/uploads/2017/08/logo-banana-400px.png", description: "Comida natural é comida saudável.", buttonType: "success"  },
          { nid: 2, img: "https://instagram.fcgh23-1.fna.fbcdn.net/v/t51.2885-19/s320x320/66443326_1371327579709918_3742764012178243584_n.jpg?_nc_ht=instagram.fcgh23-1.fna.fbcdn.net&_nc_ohc=nHi9-OuwwmcAX9YkSdP&oh=086ff88ee54c4799950a7b6c1936cbbe&oe=5EA2E9CC", description: "Gelatos artesanais", buttonType: "success", doeURL: "https://pag.ae/7VSEVURr3"  }
      ].sort(function(){return 0.5 - Math.random()})
        }
  }
};
</script>
