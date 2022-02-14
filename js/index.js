        //Start
        const start = document.getElementById("start");
        const startBox = document.getElementById("start-box");
        let startTrue = false
        //feelings
        const feelings = document.getElementById("feelings");
        const feelingsBox = document.getElementById("feelings-box");
        let feelingsTrue = false;
        //Song
        const song = document.getElementById("song");
        const songBox = document.getElementById("song-box");
        let songTrue = false;
        //Love
        const love = document.getElementById("love");
        const loveBox = document.getElementById("love-box");
        let loveTrue = false;

        //EVENT CLICK
        document.addEventListener("click", (e)=>{

            if(e.target === start){
                if(!startTrue){
                    startBox.classList.remove("none");
                    loveBox.classList.add("none");
                    songBox.classList.add("none");
                    feelingsBox.classList.add("none");
                    startTrue = true;
                }else if(startTrue){
                    startBox.classList.add("none");
                    startTrue = false;
                }
            }

            if(e.target === feelings){
                if(!feelingsTrue){
                    feelingsBox.classList.remove("none");
                    loveBox.classList.add("none");
                    songBox.classList.add("none");
                    startBox.classList.add("none");
                    feelingsTrue = true;
                }else if(feelingsTrue){
                    feelingsBox.classList.add("none");
                    feelingsTrue = false;
                }
            }

            if(e.target === song){
                if(!songTrue){
                    songBox.classList.remove("none");
                    loveBox.classList.add("none");
                    feelingsBox.classList.add("none");
                    startBox.classList.add("none");
                    songTrue = true;
                }else if(songTrue){
                    songBox.classList.add("none");
                    songTrue = false;
                }
            }

            if(e.target === love){
                if(!loveTrue){
                    loveBox.classList.remove("none");
                    songBox.classList.add("none");
                    feelingsBox.classList.add("none");
                    startBox.classList.add("none");
                    loveTrue = true;
                }else if(loveTrue){
                    loveBox.classList.add("none");
                    loveTrue = false;
                }
            }
        });