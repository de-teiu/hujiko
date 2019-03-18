<template>
  <a class="copy" v-on:click="copyqaws">コピー</a>
</template>

<style scoped>
.copy {
  -moz-box-shadow: inset 0px -3px 7px 0px #541600;
  -webkit-box-shadow: inset 0px -3px 7px 0px #541600;
  box-shadow: inset 0px -3px 7px 0px #541600;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #ff8f8f),
    color-stop(1, #9e0000)
  );
  background: -moz-linear-gradient(top, #ff8f8f 5%, #9e0000 100%);
  background: -webkit-linear-gradient(top, #ff8f8f 5%, #9e0000 100%);
  background: -o-linear-gradient(top, #ff8f8f 5%, #9e0000 100%);
  background: -ms-linear-gradient(top, #ff8f8f 5%, #9e0000 100%);
  background: linear-gradient(to bottom, #ff8f8f 5%, #9e0000 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff8f8f', endColorstr='#9e0000',GradientType=0);
  background-color: #ff8f8f;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  border: 1px solid #a9bac0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 60px;
  width: 325px;
  padding: 7px 23px;
  text-decoration: none;
  text-shadow: 0px 2px 9px #290d0d;
}

@media screen and (max-width: 540px) {
  .copy {
    font-size: 11vw;
    width: 60vw;
  }
}

.copy:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #9e0000),
    color-stop(1, #ff8f8f)
  );
  background: -moz-linear-gradient(top, #9e0000 5%, #ff8f8f 100%);
  background: -webkit-linear-gradient(top, #9e0000 5%, #ff8f8f 100%);
  background: -o-linear-gradient(top, #9e0000 5%, #ff8f8f 100%);
  background: -ms-linear-gradient(top, #9e0000 5%, #ff8f8f 100%);
  background: linear-gradient(to bottom, #9e0000 5%, #ff8f8f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#9e0000', endColorstr='#ff8f8f',GradientType=0);
  background-color: #9e0000;
}
.copy:active {
  position: relative;
  top: 1px;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    copyqaws() {
      const ta = document.createElement("textarea");
      ta.value = "くぁwせdrftgyふじこlp；＠：「」";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.parentElement.removeChild(ta);
      alert("クリップボードにコピーしました.");
    }
  }
};
</script>
