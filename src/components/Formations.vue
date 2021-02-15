<template>
    <div class="container p-0 m-0 mb-3">
       <div class="col-sm-12 p-3 content-top-bg w-100">
               <h4 class="text-center page-title text-uppercase mt-2"><strong><i class="fa fa-graduation-cap" aria-hidden="true"></i> Formations</strong></h4>
       </div>
       <div class="col-sm-12 ">
           
        <div v-for="(study, index) in studies" :key="index" class="row mt-2 align-items-center justify-content-center ">
            <div class="col-sm-2">
                <h6 class="text-center text-primary"> 
                    <strong><i class="fas fa-calendar"></i> {{study.period}}</strong>
                </h6>
            </div>
            <div class="col-sm-10 ">
                <div class="card">
                    <div class="card-body">
                        <h5 class=""> <strong>{{study.title}}</strong> </h5>
                        <h6 class="ml-2">{{study.school}}</h6>
                        <p class="ml-4">{{study.detail}}</p>
                    </div>
                </div>
             </div>
        </div>

       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            studies:[
                {
                    title:"Engineering Degree in Electronics Electrotechnics and Automatics",
                    period:"2017-2020",
                    school:"University Abdelmalek Essadi of Tanger (Morroco )",
                    detail:"Faculty of Sciences and Technologies of Tanger"
                },
                 {
                    title:"Degree of University Studies in Science and Technology (DEUST) in Electricals and Mecanicals Engineering ",
                    period:"2015-2017",
                    school:"University Hassan 1er of Settat (Morroco)",
                    detail:"Faculty of Sciences and Technologies of Settat"
                },
                 {
                    title:"Bacalaureat degree in Technology, Electronics Option",
                    period:"2014-2015",
                    school:"Bethel Technical High School of Ougadougou (Burkina Faso )",
                    detail:""
                },
                 {
                    title:"Brevet of Professional Studies Electronic Option (BEP)",
                    period:"2012-2014",
                    school:"Bethel Technical High School of Ougadougou (Burkina Faso )",
                    detail:""
                }
            ]
        }
    },
}
</script>
<style >
    .p-bg-1{
        background-color: #dc354580;
    }
     .p-bg-2{
        background-color:#28a74580;
    }
     .p-bg-3{
        background-color:#007bff40
    }
     .p-bg-4{
        background-color:#607D8B;
    }
    .settings{
        outline: solid 2px red;
    }
</style>