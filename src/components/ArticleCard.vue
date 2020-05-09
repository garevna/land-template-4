<template>
<div ref="blogCard"
    class="blog-article-preview position-relative card fixed d-flex flex-column mb-30"
    data-aos="fade-up"
    :style="{ backgroundImage: imageSrc }"
  >
  <a
      v-if="card.type === 'url'"
      v-bind:href="card.link"
      target="_blank"
      rel="noopener noreferrer"
      class="w-100 h-100"
  >
    <div class="position-absolute card-container rounded h-100 d-flex flex-column justify-content-between p-30">
      <div>
        <p class="blog-card-date text-grey-color-3">{{card.date}}</p>
        <h3 class="fs-18 text-white-color text-overflow-ellipsis">{{card.previewTitle}}</h3>
      </div>
      <div class="d-flex">
        <img v-bind:src='card.avatar' alt="Avatar" class="blog-author-avatar mr-10">
        <div>
          <p class="text-white-color font-weight-bold mb-2">{{card.author}}</p>
        </div>
      </div>
    </div>
  </a>
  <!-- <router-link
      :to="{ name: 'blog-article', params: { article: card.id } }"
      data-aos="fade-up"
      class="w-100 h-100"
  > -->
  <router-link
      :to="route"
      data-aos="fade-up"
      class="w-100 h-100"
  >
    <div class="position-absolute card-container h-100 d-flex flex-column justify-content-between p-30">
      <div>
        <p class="blog-card-date text-grey-color-3">{{card.date}}</p>
        <h3 class="fs-18 text-white-color text-overflow-ellipsis">{{card.previewTitle}}</h3>
      </div>
      <div class="d-flex">
        <img v-bind:src='card.avatar' alt="Avatar" class="blog-author-avatar mr-10">
        <div>
          <p class="text-white-color font-weight-bold mb-2">{{card.author}}</p>
        </div>
      </div>
    </div>
  </router-link>
</div>
</template>

<style>
  .blog-article-preview {
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>

<script>

export default {
  props: {
    card: Object,
  },
  computed: {
    imageSrc() {
      return `url(${this.card.imageSrc})`
    },
    route() {
      let path
      if (this.card.id === 'number') {
        path = {
          name: 'blog-article',
          params: { article: this.card.id },
        }
      } else {
        path = { name: this.card.id }
      }
      return path
    },
  },
}
</script>
