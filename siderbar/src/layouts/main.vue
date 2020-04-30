<template>
  <div class="application">
    <div class="application__sidebar">
      <router-link to="/">
     <span class="logosty"><i class="fas fa-truck"></i>  </span>
      </router-link>
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="{ name: link.to }"
        class="application__sidebar_item"
      >
       <i :class="`fa ${link.icon}`" aria-hidden="true"></i>
        {{ link.title }}
        
      </router-link>

      

    </div>
    <div class="application__content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          to: "Reports",
          title: "التقارير", 
           icon: "fa-book-open"
        },
        {
          to: "Orders",
          title: "الطلبات",
           icon: "fa-folder-open"
        },
        {
          to: "Myorders",
          title: "طلباتي",
           icon: "fa-folder"
        },
        {
          to: "Drivers",
          title: "السواق",
           icon: "fa-box"
        },
        {
          to: "Profile",
          title: "حسابي",
           icon: "fa-user"
        },
        {
          to: "Administration",
          title: "الادارة",
           icon: "fa-star"
        },
        {
          to: "Administration",
          title: " خروج",
           icon: "fa-sign-out-alt"
      
        },
      ],
    };
  },
};
</script>

<style>
.application {
  width: 100%;
  height: 100vh;
  display: flex;
}
.application__sidebar {
  height: 100%;
  width: 100px;
  background: #4c92f3;
   /* background: #4F6BF0; */
   /* background: #2371dd; */
   /* background: #008EFF; */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
}
.application__sidebar::-webkit-scrollbar {
  background: transparent;
  width: 0;
}
.application__sidebar_item {
  font-size: 17px;
  text-decoration: unset;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: 0.4s ease-in-out;
  border-right: 5px solid transparent;
}
.application__sidebar_item:hover {
  color: #ffffff;
}
.application__content {
  flex: 1;
  overflow-y: auto;
}
@font-face
    {
    font-family:jflat; 
    src:url('../assets/fonts/jf-flat.ttf'); 
    }
*,body
{
 font-family:jflat;
  padding: 0;
  margin: 0;
}

.router-link-active, .sidebar_link.active .sidebar_link_icon {
    color: #fff;
}
.sidebar_link.active, .sidebar_link.active .sidebar_link_icon {
    color: #fff;
}
.application__sidebar_item:hover {
text-decoration: none;
}
.logosty{
  color: white;
  font-size: 30px;
  margin-top: 5px;
}
</style>
