        //Start
        const start = document.getElementById("start");
        const startBox = document.getElementById("start-box");
        let startTrue = false
        //feelings
        const feelings = document.getElementById("feelings");
        const feelingsBox = document.getElementById("feelings-box");
        let feelingsTrue = false;

        document.addEventListener("click", (e)=>{
            if(e.target === start){
                if(!startTrue){
                    startBox.classList.remove("none");
                    startTrue = true;
                }else if(startTrue){
                    startBox.classList.add("none");
                    startTrue = false;
                }
            }

            if(e.target === feelings){
                if(!feelingsTrue){
                    feelingsBox.classList.remove("none");
                    feelingsTrue = true;
                }else if(feelingsTrue){
                    feelingsBox.classList.add("none");
                    feelingsTrue = false;
                }
            }
        });