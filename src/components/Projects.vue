<template>
    <div class="row p-0 m-0 mb-3">
       <div class="col-sm-12 p-3 content-top-bg w-100">
               <h4 class="text-center page-title text-uppercase mt-2"><strong><i class="fas fa-project-diagram    "></i> Projects</strong></h4>
       </div>
       <div class="col-sm-12">
         <div class="row  align-items-center">
            <div class="col-sm-2">
               <h6 class="text-center text-primary"> 
                     <strong>
                     <i class="fas fa-calendar    "> </i>
                     October 2020</strong>
                  </h6>
            </div>
            <div class="col-sm-10 mt-2">
               <div class="card ">
                  <div class="card-body">
                     <h5 class="text-primary">DC Buck converter power supply design (300W, 25A, 12V) with STM32</h5>
                     <p>This project is the design of 300W Synchronous Buck converter with 25A and 12V outpout. This project involved many design 
                        tools like Matlab/Simulink, Orcad/PSPice and PowerSim. We design the converter mathematical model and tunne the PI 
                        controller in order to have the best response for the system. An STM32 MCU was used to run the PI controller code. The PCB of 
                        the board is designed in Orcad/Cadense. 
                     </p>
                     <h5 class="">Keywords </h5>
                     <h5 >
                        <span class="badge badge-7 m-1">PWM</span> 
                        <span class="badge badge-7 m-1">MOSFET</span>
                        <span class="badge badge-7 m-1">STM32</span>
                        <span class="badge badge-7 m-1">CubeMx</span>
                        <span class="badge badge-7 m-1">C/C++</span>
                        <span class="badge badge-7 m-1">PI Controler </span>
                        <span class="badge badge-7 m-1">PCB</span>
                        <span class="badge badge-7 m-1">Orcad</span>
                        <span class="badge badge-7 m-1">Matlab/Simulink</span>
                        <span class="badge badge-7 m-1">PSpice</span>
                        <span class="badge badge-7 m-1">Current Sensor</span>
                     </h5>
                     <h5 hidden>Screenshots </h5>
                     <galery :images="images" :index="null" @close="index = null"></galery>
                     <!--- <div class="row">
                     <div class="col-sm-4" v-for="(image, imageIndex) in images" :key="imageIndex">
                        <img class="image"  @click="index = imageIndex" :src="'/'+'projects/3s/3s.png'">
                     </div>
                     
                     </div>
                     -->
                     <div> 
                     </div>
                  
                  </div>
               </div>
            </div>
       </div>

         <div class="row  align-items-center">
            <div class="col-sm-2">
               <h6 class="text-center text-primary"> 
                     <strong>
                     <i class="fas fa-calendar    "> </i>
                     January 2020</strong>
                  </h6>
            </div>
            <div class="col-sm-10 mt-2">
               <div class="card ">
                  <div class="card-body">
                     <h5 class="text-primary">DC Motor speed control  circuit design  </h5>
                     <p>The goal of the project was to control the speed of a DC motor using a PID controller and H brigde. 
                        It's also contains an android application build in android allowing the user user to specify the desired 
                        speed and the direction.
                     </p>
                     <h5 class="">Keywords </h5>
                     <h5 >
                        <span class="badge badge-7 m-1">PWM</span> 
                        <span class="badge badge-7 m-1">MOSFET</span>
                        <span class="badge badge-7 m-1">H-Bridge</span>
                        <span class="badge badge-7 m-1">ATMEGA328P</span>
                        <span class="badge badge-7 m-1">Android Studio</span>
                        <span class="badge badge-7 m-1">AVR Studio</span>
                        <span class="badge badge-7 m-1">HC06</span>
                        <span class="badge badge-7 m-1">JAVA</span>
                        <span class="badge badge-7 m-1">PID</span>
                        <span class="badge badge-7 m-1">PCB Design</span>
                        <span class="badge badge-7 m-1">KICAD</span>
                     </h5>
                     <h5 hidden>Screenshots </h5>
                     <galery :images="images" :index="null" @close="index = null"></galery>
                     <!--- <div class="row">
                     <div class="col-sm-4" v-for="(image, imageIndex) in images" :key="imageIndex">
                        <img class="image"  @click="index = imageIndex" :src="'/'+'projects/3s/3s.png'">
                     </div>
                     
                     </div>
                     -->
                     <div> 
                     </div>
                  
                  </div>
               </div>
            </div>
       </div>

            <div class="row  align-items-center">
          <div class="col-sm-2">
            <h6 class="text-center text-primary"> 
                    <strong>
                    <i class="fas fa-calendar    "></i> December 2019
                    
                    </strong>
                </h6>
          </div>
         <div class="col-sm-10 mt-2">
            <div class="card ">
               <div class="card-body">
                  <h5 class="text-primary">Automatic control of tank filling with LabView  </h5>
                  <p>This project is design to control the filling of a tank using a PID controller, 
                     LabView and the FPGA board  Spartan 3E of Xillinx.<Label></Label>
                  </p>
                  <h5 class="">Keywords </h5>
                  <h5 >
                     <span class="badge badge-7 m-1">LabView</span> 
                     <span class="badge badge-7 m-1">FPGA</span>
                     <span class="badge badge-7 m-1">PID Controller</span>
                     <span class="badge badge-7 m-1">DAC</span>
                     <span class="badge badge-7 m-1">ADC</span>
                  </h5>
                  <h5 hidden>Screenshots </h5>
                   <galery :images="images" :index="null" @close="index = null"></galery>
                  <!--- <div class="row">
                   <div class="col-sm-4" v-for="(image, imageIndex) in images" :key="imageIndex">
                       <img class="image"  @click="index = imageIndex" :src="'/'+'projects/3s/3s.png'">
                   </div>
                   
                   </div>
                   -->
                   <div> 
                   </div>
               
               </div>
            </div>
         </div>
       </div>

       <div class="row  align-items-center">
          <div class="col-sm-2">
            <h6 class="text-center text-primary"> 
                    <strong>
                    <i class="fas fa-calendar    "></i>
                    October 2019</strong>
                </h6>
          </div>
         <div class="col-sm-10 mt-2">
            <div class="card ">
               <div class="card-body">
                  <h5 class="text-primary">Realtime security alerte system with google firebase </h5>
                  <p>The goal of the project was to generate notifcations for an android application through 
                     google cloud functions . When the system detect an high  temperature of the presence of 
                     the smoke in the room it send automaticaly notifications to the android application.
                  </p>
                  <h5 class="">Keywords </h5>
                  <h5 >
                     <span class="badge badge-7 m-1">ESP8266</span> 
                     <span class="badge badge-7 m-1">Arduino</span>
                     <span class="badge badge-7 m-1">Google firebase</span>
                     <span class="badge badge-7 m-1">Node JS</span>
                     <span class="badge badge-7 m-1">Android Studio</span>
                     <span class="badge badge-7 m-1">Java</span>
                     <span class="badge badge-7 m-1">WebSocket</span>
                     <span class="badge badge-7 m-1">Pcb design</span>
                  </h5>
                  <h5 hidden>Screenshots </h5>
                   <galery :images="images" :index="null" @close="index = null"></galery>
                  <!--- <div class="row">
                   <div class="col-sm-4" v-for="(image, imageIndex) in images" :key="imageIndex">
                       <img class="image"  @click="index = imageIndex" :src="'/'+'projects/3s/3s.png'">
                   </div>
                   
                   </div>
                   -->
                   <div> 
                   </div>
               
               </div>
            </div>
         </div>
       </div>
 
      <div class="row  align-items-center">
         <div class="col-sm-2">
            <h6 class="text-center text-primary"> 
                    <strong>
                    <i class="fas fa-calendar    "></i>
                    June 2019</strong>
                </h6>
         </div>
         <div class="col-sm-10 mt-2">
            <div class="card ">
               <div class="card-body">
                   <h5 class="text-primary"> 
                       
                     Automation of a sorting system with a Siemens 1200 PLC and the PLC WORKCELL 34-120 training kit.
                  </h5>
                  <p>
                     The objective of the project was to sort the pieces 
                     according to their types (metal or plastic),
                      assemble them and deposit according to their types.
                  </p>
                  <h5 class="">Keywords </h5>
                  <h5 >
                     <span class="badge badge-7 m-1">PLC</span> 
                     <span class="badge badge-7 m-1">TIA Portal</span>
                     <span class="badge badge-7 m-1">API 1200 Siemens</span>
                     <span class="badge badge-7 m-1">PLC WORKCELL 34-120</span>
                    
                  </h5>
               </div>
            </div>
         </div>
      </div>

      <div class="row mt-2  align-items-center">
         <div class="col-sm-2">
            <h6 class="text-center text-primary"> 
                    <strong>
                    <i class="fas fa-calendar    "></i>
                    May 2019</strong>
                </h6>
         </div>
         <div class="col-sm-10 ">
            <div class="card ">
               <div class="card-body">
                  <h5 class="text-primary">Building 16 bits calculator using microprocessor 8086 of Intel </h5>
                  <p>The goal of the project was to build a simple calcultator with Intel 8086 microprocessor
                     using only assembly language. The purpose was to learn more with computer architecture and his interaction with
                     external components.
                  </p>
                  <h5 class="">Keywords </h5>
                  <h5 >
                     <span class="badge badge-7 m-1">Assembly Langage</span> 
                     <span class="badge badge-7 m-1">Intel 8086</span>
                     <span class="badge badge-7 m-1">Intel 8085</span>
                     <span class="badge badge-7 m-1">LCD display</span>
                     <span class="badge badge-7 m-1">Emu8086</span>
                     <span class="badge badge-7 m-1">Proteus for simulation</span>
                     <span class="badge badge-7 m-1">Kicad for PCB design</span>
                     <span class="badge badge-7 m-1">KeyPad</span>
                  </h5>
               </div>
            </div>
         </div>
      </div>

      <div class="row  align-items-center">
         <div class="col-sm-2">
            <h6 class="text-center text-primary"> 
                    <strong>
                    <i class="fas fa-calendar    "></i>
                    May 2018</strong>
                </h6>
         </div>
         <div class="col-sm-10 mt-2">
            <div class="card ">
               <div class="card-body">
                  <h5 class="text-primary">Line follower robot (ASURO Robot) using Atmega 8 </h5>
                  <p>
                     The goal was to programme the Do It yourself line folowers robot Asuro. The programming language used was the C programming
                     language.
                  </p>
                  <h5 class="">Keywords </h5>
                  <h5 >
                     <span class="badge badge-7 m-1">Atmega 8</span> 
                     <span class="badge badge-7 m-1">Avr Studio</span>
                     <span class="badge badge-7 m-1">C programming</span>
                     <span class="badge badge-7 m-1">PWM </span>
                  </h5>
               </div>
            </div>
         </div>
      </div>

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
                  <h5 class="text-primary">
                     Creating a graphical desktop application for managing a 
                     library with the C ++ language and the Qt Framework
                  </h5>
                  <p>
                  The goal of the project was the management of 
                  a library with the C ++ language and the Qt 
                  creaator framework. Implementation of the 
                  operations of recordings, modifications,
                   consultations and the updating of the information 
                   stored in a text file.
                  </p>
                  <h5 class="">Keywords </h5>
                  <h5 >
                     <span class="badge badge-7 m-1">C++</span> 
                     <span class="badge badge-7 m-1">POO</span> 
                     <span class="badge badge-7 m-1">Qt creator</span>
                     <span class="badge badge-7 m-1">Configuration File</span>
                  </h5>
               </div>
            </div>
         </div>
      </div>
       </div>
    </div>
</template>

<script>
import galery from 'vue-gallery';
export default {
components:{
 galery
},
 data() {
    return {
       projects:[
          {
             images:[
                'https://dummyimage.com/800/ffffff/000000',
                'https://dummyimage.com/1600/ffffff/000000',
                'https://dummyimage.com/1280/000000/ffffff',
                'https://dummyimage.com/400/000000/ffffff',
             ],
             index:null
          }
       ],
       images:[
               
             ],
    }
 },
}
</script>

<style >
  .image {
    border: 1px solid #ebebeb;
    width: 100% ;
    height: auto;
    margin: 5px;
  }
</style>