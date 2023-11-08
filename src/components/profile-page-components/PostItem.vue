<template>
  <div class="post-item">
    <div class="images">
      <div class="div">
        <div class="column">
          <img
            loading="lazy"
            srcSet="..."
            class="img"
          />
        </div>
        <div class="column-2">
          <img
            loading="lazy"
            srcSet="..."
            class="img"
          />
        </div>
        <div class="column-3">
          <img
            loading="lazy"
            srcSet="..."
            class="img-2"
          />
        </div>
      </div>
    </div>
    <div class="caption">What to order at Heng Mui Keng Sushi</div>
    <div class="description">
      Why these sushi are a must-try when you visit this exquisite Japanese
      restaurant in the West
    </div>
  </div>
</template>


<style scoped>
.post-item {
  display: flex;
  flex-direction: column;
}
.images {
  align-self: stretch;
  position: relative;
}
@media (max-width: 991px) {
  .images {
    max-width: 100%;
  }
}
.div {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.img {
  aspect-ratio: 1.51;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}
@media (max-width: 991px) {
  .img {
    margin-top: 23px;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.img-2 {
  aspect-ratio: 1.51;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}
@media (max-width: 991px) {
  .img-2 {
    margin-top: 22px;
  }
}
.caption {
  color: rgba(0, 0, 0, 0.97);
  align-self: stretch;
  position: relative;
  margin-top: 22px;
  font: 700 30px Inter, sans-serif;
}
@media (max-width: 991px) {
  .caption {
    max-width: 100%;
  }
}
.description {
  color: rgba(0, 0, 0, 0.97);
  align-self: stretch;
  position: relative;
  margin-top: 28px;
  font: 300 30px Inter, sans-serif;
}
@media (max-width: 991px) {
  .description {
    max-width: 100%;
  }
}
</style>

    
<script> //to be linked to Firebase 
export default {
  name: "PostItem",

  props: {
    caption: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true,
      validator(images) {
        return images.length === 3; // expecting exactly 3 images for now
      }
    }
  }
};
<<<<<<< HEAD
</script>
=======
</script>
>>>>>>> dbccb2754b885711c224003f679f0262d170981d
