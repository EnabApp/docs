<template>
  <li><slot /></li>
</template>

<style scoped>
  ul > li {
    list-style-type: none;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }
  ul > li:before {
    content: '•';
    color: rgba(255, 255, 255, 0.2);
    margin-right: 1rem;
    /* margin-left: 1rem; */
  }
</style>
<!-- <style scoped>
ol > li {
  list-style-type: none;
  counter-increment: step-counter;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}

ol > li:before {
    content: counter(step-counter);
    color: white;
    background-color: rgba(255,255,255, 0.05);
    border-radius: 0.25rem;
    border-color: rgba(255,255,255, 0.05);
    border-width: 1px;
    border-style: solid;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-right: 0.25rem;
    font-weight: bold;
}
</style> -->