 /** 
   * This function displays a modal box
   * @param {videoSource} string
   * @param {title} string
   * @param {description} string
   * @return {Promise} 
   * 

 */ 
export function modal(videoSource, title, description){

      return new Promise((resolve, reject)=>{

            const modalHTML = `
            
                 <div id="modal-mask">
                 
                    <div id="modal">
                      
                        <video controls>
                           <source src="${videoSource}" type="video/mp4" />
                        </video>
                    
                        <h2>${title}</h2>

                        <p>${description}</p>
                       
                       <div id="area-buttons">
                            <button id="button-skip" class="button outline-button">Skip</button>
                            <button id="button-next" class="button">Next</button>
                       </div>


                    </div>
                 
                 </div>
             
            `;

            document.querySelector("#body").insertAdjacentHTML("beforeend", modalHTML);

            document.querySelector("#area-buttons").addEventListener("click", (event)=>{

                    if(event.target !== event.currentTarget){

                         const targetId = event.target.id;

                         if(targetId === "button-skip"){

                             return resolve("The skip button is clicked");

                         }

                         return resolve("The next button is clicked");

                    }

            });

      });

}