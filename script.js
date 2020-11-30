      
            function ad(){
                alert("Search bar is currently not functional")
            };
            function back(){
                var item = document.querySelector(".aside");
                item.style.transform = "translateX(-100%)";
            };
            function forw(){
                var item = document.querySelector(".aside");
                item.style.transform = "translateX(0)";
                setTimeout(() => {item.style.transform = "translateX(-100%)"}, 7000); 
            };
            function succ(){
                alert("Your message has been succesfully sent!")
            }
       