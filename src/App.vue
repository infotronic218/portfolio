<template>
   <div id="app" class="main container-fluid">
      <div class="row row-main">
        <div id="slide" class="col-sm-3 p-0 m-0  slide-bg ">
          <div class="h-100"><Slide/></div>
        </div>
        <div id="content" class="col-sm-9 p-0   content-bg">
          <transition name="page1" mode="out-in">
           <router-view/>
          </transition>
          <button id="gototop">Go to top</button>
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
  },
  methods: {
    
     mscroll(){
        var btn_totop= document.getElementById('gototop');
        var content = document.getElementById('content');
        if (document.body.scrollTop >= content.clientHeight   || document.documentElement.scrollTop > 700) {
           btn_totop.style.display = "block";
          } else {
            btn_totop.style.display = "none";
          }
     }
  },
  mounted() {
    var $this = this ;
   window.onscroll = function(){
     $this.mscroll();
   }
   document.getElementById("gototop").addEventListener('click',function(){
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
   });
  },
  updated() {
    
  },
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

#gototop{
   display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color:#331b1b; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 8px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 14px; /* Increase font size */
}
  
</style>