<template>
  <div class="user-profile-info">
    <div class="profile-pic-name-and-stats">
      <div class="div">
        <div class="column">
          <img
            loading="lazy"
            srcSet="..."
            class="img"
          />
          <div class="name">Ah Beng</div>
        </div>
        <div class="column-2">
          <div class="posts">Posts</div>
          <div class="no-of-posts">17</div>
        </div>
        <div class="column-3">
          <div class="div-2">Following</div>
          <div class="no-of-following">2</div>
        </div>
      </div>
    </div>
    <div class="biography">
      Hi friends! Welcome to my page where I share all my favourite Japanese
      restaurants!
    </div>
  </div>
</template>



<style scoped>
.user-profile-info {
  display: flex;
  flex-direction: column;
}
.profile-pic-name-and-stats {
  align-self: stretch;
  margin-right: -20px;
}
@media (max-width: 991px) {
  .profile-pic-name-and-stats {
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
  width: 46%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.img {
  aspect-ratio: 1.32;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  align-self: stretch;
}
.name {
  color: rgba(0, 0, 0, 0.97);
  align-self: stretch;
  margin-top: 20px;
  font: 700 30px Inter, sans-serif;
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.posts {
  color: rgba(0, 0, 0, 0.97);
  text-align: center;
  align-self: stretch;
  font: 700 30px Inter, sans-serif;
}
.no-of-posts {
  color: rgba(0, 0, 0, 0.97);
  text-align: center;
  align-self: center;
  margin-top: 41px;
  white-space: nowrap;
  font: 300 30px Inter, sans-serif;
}
@media (max-width: 991px) {
  .no-of-posts {
    margin-top: 40px;
    white-space: initial;
  }
}
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 29%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.div-2 {
  color: rgba(0, 0, 0, 0.97);
  text-align: center;
  align-self: stretch;
  font: 700 30px Inter, sans-serif;
}
.no-of-following {
  color: rgba(0, 0, 0, 0.97);
  text-align: center;
  align-self: center;
  margin-top: 35px;
  font: 300 30px Inter, sans-serif;
}
.biography {
  color: rgba(0, 0, 0, 0.97);
  align-self: stretch;
  margin: 22px -20px 0 0;
  font: 300 30px Inter, sans-serif;
}
@media (max-width: 991px) {
  .biography {
    max-width: 100%;
  }
}
</style>

<script>
export default {
  name: "UserProfileInfo",
  props: {
    userName: {
      type: String,
      required: true
    },
    userBio: {
      type: String,
      default: 'This user has no biography.'
    }
  }
};
</script>

