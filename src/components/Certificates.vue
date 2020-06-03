<template>
    <div class="container p-0 m-0 mb-3">
       <div class="col-sm-12 p-3 content-top-bg w-100">
               <h4 class="text-center page-title text-uppercase mt-2"><strong>
                   <i class="fas fa-certificate  "></i> Certificates</strong></h4>
       </div>
       <div class="col-sm-12 ">
           
        <div v-for="(certificate, index)  in certificates"  :key="index" class="row mt-2 align-items-center justify-content-center ">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="text-center"> <strong> {{certificate.title}}</strong> </h4>
                    </div>
                    <div class="card-body p-0">
                        <img class="img" :src="certificate.image">
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
            certificates:[
                {
                    title:"Labview Real-Time 1",
                     image:require("../assets/certificates/labview-real-time1.png")
                 },
                 {
                    title:"Labview FPGA ",
                     image:require("../assets/certificates/labview-fpga.png")
                 },

                {
                    title:"Labview Core 2 2019",
                     image:require("../assets/certificates/labview-core2.png")
                 },
                {
                    title:"Creating Web Application using Labview NXG ",
                     image:require("../assets/certificates/labview-nxg.png")
                 },
                {
                    title:"Labview Core 1 2019",
                     image:require("../assets/certificates/labview-core1.png")
                 },

                {
                    title:"Design of Solar PV Systems from Udemy",
                     image:require("../assets/certificates/solar-design.jpg")
                 },
                 {
                    title:"Modular  embeded systems design with Arm cortex-M from Udemy",
                     image:require("../assets/certificates/modular-arm.jpg")
                 },
                {
                    title:"Iot using NodeMcu board from Udemy",
                     image:require("../assets/certificates/iotesp8266.jpg")
                 },
                {
                    title:"Java certifcate",
                     image:require("../assets/certificates/java.jpg")},
                 {
                     title:"Python certificate",
                    image:require("../assets/certificates/python3.jpg")
                 },
                 {
                    title:"Completed courses on openclassroom",
                    image:require("../assets/certificates/openclassroom.png")
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