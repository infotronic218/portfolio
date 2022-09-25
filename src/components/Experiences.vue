<template>
    <div class="container-fluid p-0 mb-3">
       <div class="col-sm-12 p-3 content-top-bg w-100">
               <h4 class="text-center page-title text-uppercase mt-2"><strong><i class="fa fa-star"></i> Experiences</strong></h4>
       </div>
       <div class="col-sm-12">

     
       <div v-for="(exp, index) in experiences" :key="index" class="row mt-2  justify-content-center align-items-center">
            <div class="col-sm-3 p-0">
                <h6 class="text-center text-uppercase text-primary"> 
                    <i class="fas fa-calendar    "></i>
                   {{exp.start}} to {{exp.end}}
                </h6>
            </div>
            <div class="col-sm-9 mt-2">
                <div class="card">
                    <div class="card-body">
                    <div class="row mt-2">
                        <div class="col-sm-3">
                            <div class="img-container">
                                <img :src="exp.image" class="img">
                            </div>
                        </div >
                        <div class="col-sm-9">
                            <h5 class="text-primary" v-text="exp.title">
                                Internship at ACOME MAROC in the departement of maintainance
                            </h5>
                            <p class="p-2" v-text="exp.description">The subject treated in the internship is the measurement of the electrical
                                 consumption of the machines and the storage in a time serie database 
                                 for the energetic efficiency </p>
                            <h6>Keywords</h6>
                            <p>
                                 <span v-for="(key, index) in exp.keywords" :key="index" class="badge badge-10 m-1 p-2" v-text="key">Iot </span>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
       </div
>
    </div>
</template>
<script>
export default {
    data(){
       return{ experiences:[
         {start:"April 2022",
             end:"September 2022",
             title:"Embedded Power Electronics Graduate Enginneer Schneider Electric",
             description:"Digital Power Factor (PFC) Controller Design with STM32 MCU, Matlab/Simulink"+
             " and Embedded Coder for code generation. Control loops compensators design, analog signals samplings and PWM control.  ",
             keywords:['Power System Simulation','Matlab',"STM32",'Embedded Coder',
               'Code generation','Digital Controller Design','ADC','STM32CubeIDE', 'Power Factor Corrector(PFC)', 'TIMER', 'PWM'],
             image:require('../assets/schneider.png'),
             },
            {start:"September 2020",
             end:"August 2021",
             title:"Embedded Electronics Enginneer at ConnectToAll Morroco Tanger",
             description:"Electronics circuits simulation and PCB design with (KiCad, Altium, LTSpice, Proteus)."+
             "Software development with Python, C/C++, Arduino, Java/Android for (STM32, ESP32, Raspberry Pi, AVR).",
             keywords:['PCB Design','Kicad',"Altium",'GSM',"FreeRTOS",
               'Pyhton','Websocket','RestApi','C/C++','Raspberry Pi'],
             image:require('../assets/c2a.png'),
             },

            {start:"Mars 2020",
             end:"July 2020",
             title:"Graduation Internchip at ConnectToAll Morroco Tanger",
             description:"Working with the IOT Team for the design and the development of  Wireless NetWork sensors for monitoring and controlling an agriculture irrigation system ",
             keywords:['PCB DESIGN','Kicad','GSM','RF','IOT','Wireless Network',
               'Pyhton','Websocket','RestApi','C/C++','Raspberry Pi'],
             image:require('../assets/c2a.png'),
             },
             {start:"From 03/08/2018 ",
             end:" 30/09/2018",
             title:"Internship at ACOME MAROC at the departement of maintainance",
             description:"The subject treated in the internship is the measurement of the electrical"+
                                " consumption of the machines and the storage in a time serie database "+
                                " for the energetic efficiency ",
             keywords:['Monitoring','IOT','Egauge meter',
               'Power measurement','Push Api','Time serie database'],
             image:require('../assets/acome.png'),
             },
             {start:"From 03/08/2018",
             end:"30/09/2018",
             title:"Internship at GREEPSYS MAROC in the department of electricity",
             description:" The work carried out during this internship was the study of the"+
                          " dimensioning and the installation of"+
                          "a system of solar energy for the feeding of an isolated house",
             keywords:['Solar energy','Solar panels','Electrical wires size calculation',
             'Circuit protection','Battery capacity calculation'
               ],
             image:require('../assets/greepsys.png'),
             }
          ]
        }
    }
}
</script>
<style >
  .img-container{
     width: 150px;
  }
  .img{
      max-width: 100%;
      height: auto;
  }
  .settings{
      outline: 2px solid red ;
  }
</style>