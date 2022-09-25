<template>
        <div class="row  align-items-center">
         <div class="col-sm-2">
            <h6 class="text-center text-primary"> 
                    <strong>
                    <i class="fas fa-calendar    "></i>
                    Mars 2018</strong>
                </h6>
         </div>
         <div class="col-sm-10 mt-2">
            <div class="card ">
               <div class="card-body">
                  <h5 class="text-primary" v-text="project.title">
                     Creating a graphical desktop application for managing a 
                     library with the C ++ language and the Qt Framework
                  </h5>
                  <p v-text="project.description">
                  The goal of the project was the management of 
                  a library with the C ++ language and the Qt 
                  creaator framework. Implementation of the 
                  operations of recordings, modifications,
                   consultations and the updating of the information 
                   stored in a text file.
                  </p>
                  <h5 class="">Keywords </h5>
                  <h5 >
                     <span v-for="(key, index) in project.keywords" :key="index" class="badge badge-7 m-1">{{key}}</span> 
                  </h5>
                  <h5 class="">Screenshots</h5>
                  <div class="card-body">
                    <div class="row">
                       <div v-for="(image, index) in project.images" :key="index"  class="col-sm-6">
                         <div  class="card align-center">
                            <div class="img-container  p-0 mx-0 my-2">
                                <img class="img-project" :src="image">
                            </div>
                         </div>
                       </div>
                    </div>
                  </div>
                  <div class="card-footer">
                     <div class="row">
                        <div class="col-sm-6">
                              <div class="card bg-primary ">
                                 <button class="btn btn-primary text-center">
                                    <i class="fa fa-arrow-left"></i>
                                 </button>
                              </div>
                        </div>
                        <div class="col-sm-6">
                              <div class="card bg-primary  ">
                                 <button class="btn btn-secondary text-center "><i class="fa fa-arrow-right"></i></button>
                              </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>

<script>
export default {
    data(){
       return {
        images:[
                'https://dummyimage.com/800/ffffff/000000',
                'https://dummyimage.com/1600/ffffff/000000',
                
            ],
        project:{
            title:" Creating a graphical desktop application for managing a "+
                     "library with the C ++ language and the Qt Framework",
            description:"The goal of the project was the management of a library with the C ++"+ 
            "language and the Qt creaator framework. Implementation of the operations of "+
            "recordings, modifications, consultations and the updating of the information "+
            "stored in a text file",
            keywords:["C/C++", "POO", "SQL", "QT Creator", "File System"],
            images:[
                'https://dummyimage.com/800/ffffff/000000',
                'https://dummyimage.com/1600/ffffff/000000',
               // 'https://dummyimage.com/1280/000000/ffffff',
                //'https://dummyimage.com/400/000000/ffffff',
            ]
        }
       }
    }
}
</script>

<style>
 .img-project{
    max-width: 100%;
    max-height:100%;
    display: block;
 }

.img-container{
    width:200px;
 height:120px;
}
</style>