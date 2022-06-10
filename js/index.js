import {modal} from "./modal.mjs";

document.addEventListener("DOMContentLoaded", ()=>{

      document.querySelector("#open-modal").addEventListener("click", ()=>{

            modal("../medias/morbius.mp4", "Welcome to the Ubix-Group TP", "This is the modal done for the today TP at Ubix-Group with Gaelle, Tchouta, Gabby and I").then((response)=>{

                    function closeModal(){

                        document.querySelector("#modal-mask").remove();

                    }
                
                    if(response === "The skip button is clicked"){

                        
                    }


                    return closeModal(); 

            });

      });

})