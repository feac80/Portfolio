        let bar = function(tag, n){
                // console.log("n:" + n);
                // console.log("tag:" + tag);
              
                    for(var i=1 ; i <= n ; i++){
                       // $(tag).css("width", i + "%").text(i + " %");
                       $(tag).css("width", i + "%");
                    }

            };

        bar("#html",80);
        bar("#css",75);
        bar("#js",75);
        bar("#nodejs",65);
        bar("#mongodb",65);
        bar("#bootstrap",80);  
        bar("#cypress",85);  

  // scrolling to the target link

  let anchorlinks = document.querySelectorAll('nav a[href^="#"]');
  //console.log(anchorlinks);

  for(let i=0 ; i < anchorlinks.length ; i++){
    //console.log(anchorlinks[i]);

     anchorlinks[i].addEventListener('click', (e)=> {
      
           let hashval = anchorlinks[i].getAttribute('href');
           let target = document.querySelector(hashval);
          // console.log(target);
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
             history.pushState(null, null, hashval);
             e.preventDefault();
        });
  }
  function  sayhello(){
        alert("submitted form");
        event.preventDefault();
        
        
    }