<template>
    <div class="container h-100">
       
       <div class="row mt-3 justify-content-center text-center">
            <div class="p-4" style="display:table-cell; vertical-align:middle; text-align:center">
              <img class="img photo"  src="@/../public/photo.png"
                alt="SAWADOGO OUSSENI">
              
           </div>
       </div>
       <h5 class="mt-3 text-white text-center text-uppercase"><router-link  to="/" class="text-white">Sawadogo Ousseni </router-link></h5>
       <h6 class="text-center text-warning"> <strong>Young Electronics, Electrotechnics and Automatics Engineer </strong></h6>
       <div class="row justify-content-center mt-5">
           <div class="col-sm-12 mb-3">
              <div class="list-group">
                  <router-link  to="competences" class="list-group-item  m-1 btn btn-primary list-group-item-action" exact-active-class="active"><strong><i class="fa fa-cogs" aria-hidden="true"></i> Competences</strong></router-link>
                  <router-link to="experiences" class="list-group-item btn btn-primary m-1 list-group-item-action" exact-active-class="active"><strong><i class="fa fa-star"></i> Experiences</strong></router-link>
                  <router-link  to="projects" class="list-group-item btn btn-primary m-1  list-group-item-action " exact-active-class="active"><strong><i class="fas fa-project-diagram    "></i> Projects</strong></router-link>
                  <router-link  to="formations" class="list-group-item btn btn-primary m-1  list-group-item-action " exact-active-class="active"><strong><i class="fa fa-graduation-cap" aria-hidden="true"></i> Formations</strong></router-link>
                  <router-link  to="certificates" class="list-group-item btn btn-primary m-1  list-group-item-action " exact-active-class="active"><strong><i class="fas fa-certificate    "></i> Certificates</strong></router-link>
                  <router-link  to="contact" class="list-group-item btn btn-primary m-1  list-group-item-action " exact-active-class="active"><strong><i class="fa fa-address-card" aria-hidden="true"></i> Contact</strong></router-link>
              </div>
           </div>
       </div>
    </div>
</template>
<style >
 .photo{
  border-radius: 50%;
 }
 settings{
     outline: 2px red  solid;
 }
</style>