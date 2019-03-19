<template>
  <a
    class="tweet" target="_blank"
    href="https://twitter.com/intent/tweet?text=%E3%81%8F%E3%81%81%EF%BD%97%E3%81%9B%EF%BD%84%EF%BD%92%EF%BD%86%EF%BD%94%EF%BD%87%EF%BD%99%E3%81%B5%E3%81%98%E3%81%93%EF%BD%8C%EF%BD%90%EF%BC%9B%EF%BC%A0%EF%BC%9A%E3%80%8C%E3%80%8D%0A%0A&url=https%3A%2F%2Fhujiko.netlify.com%2F"
  >ツイート</a>
</template>

<style scoped>
.tweet {
  -moz-box-shadow: inset 0px -3px 7px 0px #29bbff;
  -webkit-box-shadow: inset 0px -3px 7px 0px #29bbff;
  box-shadow: inset 0px -3px 7px 0px #29bbff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #2dabf9),
    color-stop(1, #0688fa)
  );
  background: -moz-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
  background: -webkit-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
  background: -o-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
  background: -ms-linear-gradient(top, #2dabf9 5%, #0688fa 100%);
  background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2dabf9', endColorstr='#0688fa',GradientType=0);
  background-color: #2dabf9;
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
  text-shadow: 0px 2px 9px #263666;
}

@media screen and (max-width: 540px) {
  .tweet {
    font-size: 11vw;
    width: 60vw;
  }
}

.tweet:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #0688fa),
    color-stop(1, #2dabf9)
  );
  background: -moz-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
  background: -webkit-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
  background: -o-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
  background: -ms-linear-gradient(top, #0688fa 5%, #2dabf9 100%);
  background: linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0688fa', endColorstr='#2dabf9',GradientType=0);
  background-color: #0688fa;
}
.tweet:active {
  position: relative;
  top: 1px;
}
</style>
