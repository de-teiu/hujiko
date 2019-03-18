<template>
  <section class="container">
    <div class="box">
      <div>
        <span>くぁwせdrftgyふじこlp；＠：「」</span>
      </div>
      <div>
        <btn-tweet/>
      </div>
      <div>
        <btn-copy/>
      </div>
    </div>
  </section>
</template>

<script>
import BtnTweet from "~/components/BtnTweet.vue";
import BtnCopy from "~/components/BtnCopy.vue";

export default {
  components: {
    BtnTweet,
    BtnCopy
  }
};
</script>

<style scoped>
.box > div:not(:first-child) {
  margin-top: 10vh;
}
span {
  font-size: 6vw;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;

  text-align: center;
}
</style>
