<template>
   <div id="app" class="main container-fluid">
      <div class="row row-main">
        <div class="col-sm-3 p-0 m-0  slide-bg ">
          <div class="h-100"><Slide/></div>
        </div>
        <div class="col-sm-9 p-0   content-bg">
          <transition name="page1" mode="out-in">
           <router-view/>
          </transition>
        </div>
      </div>
   </div>
</template>

<script>
//import Application from './components/Application.vue'
import Slide from './components/Slide.vue'

export default {
  name: 'app',
  components: {
   Slide
  }
}
</script>
<style>
 html{
   width: 100%;
   height: 100%;
   padding: 0;
   margin: 0;
 }
  body{
    height: 100%;
    width: 100%;
  }
  .main{
    height: 100%;
    width: 100%;
  }
  .row-main{
    height: 100%;
  }
  .slide-bg{
    background-color: #060721;
  }
  .content-bg{
    background-color:#89969854;
  }
  .content-top-bg{
    background-color: #88899c;
  }

  .page1-enter-active, .page1-leave-active {
  transition: opacity 1s, transform 1s ! important;
}
.page1-enter, .page1-leave-to {
  opacity: 0;
  transform: translateX(-30%) !important;
}

.page-title{
  color: white ;
}
  
</style>