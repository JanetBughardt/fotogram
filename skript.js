 let randomTitles= [
           "./img/ai-generated-8659507_1280.jpg",
           "./img/ai-generated-8961074_1280.jpg",
           "./img/anemone-4475898_1280.jpg",
           "./img/anemonefish-1496866_1280.jpg",
           "./img/fish-4888451_1280.jpg",
           "./img/jellyfish-2427426_1280.jpg",
           "./img/sea-3572203_1280.jpg",
           "./img/waterfall-7845023_1280.jpg",
           "./img/waterfall-8350178_1280.jpg",
           "./img/whale-1850235_1280.jpg",
        ];

           let randomPictures = [
            "./img/ai-generated-8659507_1280.jpg",
             "./img/ai-generated-8961074_1280.jpg",
           "./img/anemone-4475898_1280.jpg",
           "./img/anemonefish-1496866_1280.jpg",
           "./img/fish-4888451_1280.jpg",
           "./img/jellyfish-2427426_1280.jpg",
           "./img/sea-3572203_1280.jpg",
           "./img/waterfall-7845023_1280.jpg",
           "./img/waterfall-8350178_1280.jpg",
           "./img/whale-1850235_1280.jpg",
        ];
        

           let arrTitle = [];
           let arrPicture = [];
           
           let currentIndex = 0;
           
           function renderFilter(index) {
               if (index >= 1 && index <= randomTitles.length) {
                   currentIndex = index -1;
                   arrTitle = [randomTitles[index - 1]];
                   arrPicture = [randomPictures[index - 1]];
                   render();
           
                   let overlayRef = document.getElementById('overlay');
                   overlayRef.style.display = 'flex';
               }
           
           }
           
           
           function render() {
               let contentRef = document.getElementById('overlay');
               contentRef.innerHTML = ""; // Clear content before rendering new items
           
                   contentRef.innerHTML += getHtml();
               }
           
           
           
               function getHtml() {
                return `
                <div>
                    <button class="close-button" onclick="toggleOverlay()">x</button>
                    <h1 id="imageTitle"class="title">${arrTitle}</h1>
                    <div class="image-template">
                        <img class="overlay-img"id="overlayImage" src="${arrPicture}" alt="Image">
                    </div>
                    <div class="navigation-controls">
                        <img onclick="reverseImage()"class="button-reverse" src ="./icons/arrow2.png"></button>
                        <p id="imageNumber">${currentIndex + 1}/ ${randomPictures.length}</p>
                        <img onclick="nextImage()" class="button-next" src ="./icons/arrow1.png"></button>
                    </div>
                </div>
                `;
            }
            
           function toggleOverlay() {
               let overlayRef = document.getElementById('overlay');
               overlayRef.style.display = 'none'
              
           }
           
           
           function updateOverlay() {
               let imageSrc = randomPictures[currentIndex];
               document.getElementById('overlayImage').src = randomPictures[currentIndex];
               document.getElementById('imageNumber').textContent = `${currentIndex + 1} / ${randomPictures.length}`;
               document.getElementById('imageTitle').textContent  = randomTitles[currentIndex];
           }
           
           
           function nextImage() {
               currentIndex = (currentIndex + 1) % randomPictures.length; 
               updateOverlay();
           }
           
           
           function reverseImage() {
               currentIndex = (currentIndex - 1 + randomPictures.length) % randomPictures.length; 
               updateOverlay();
           }
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           