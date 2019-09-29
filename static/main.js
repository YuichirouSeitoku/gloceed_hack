        var soup, noodle, thickness;

        function changeSoup(value) {
            soup = value;
            console.log(value);
        }

        function changeNoodle(value) {
            noodle = value;
            console.log(value);
        }

        function changeThickness(value) {
            thickness = value;
            console.log(value);
        }

        function showImage(){
            var parent=document.getElementById("img_parent")
           while (parent.firstChild) parent.removeChild(parent.firstChild);
            console.log("show")
            console.log(soup)
            console.log(noodle)
            if(soup=="pork"){
                if(noodle.search("thin")!== -1){
                  console.log("yer")
                  var create_img = document.createElement('img');
                  create_img.id = 'create';
                  create_img.src = '../static/pork_thin.jpg';
                  document.getElementById("img_parent").appendChild(create_img);
               }
                else if(noodle.search("thick"!==-1)){
                  var create_img = document.createElement('img');
                  create_img.id = 'create';
                  create_img.src = '../static/pork_thick.jpg';
                  document.getElementById("img_parent").appendChild(create_img);
                }
            }
            if(soup=="miso"){
                if(noodle.search("thin")!== -1){
                  console.log("yer")
                  var create_img = document.createElement('img');
                  create_img.id = 'create';
                  create_img.src = '../static/miso_thin.jpg';
                  document.getElementById("img_parent").appendChild(create_img);
               }
                else if(noodle.search("thick"!==-1)){
                  var create_img = document.createElement('img');
                  create_img.id = 'create';
                  create_img.src = '../static/miso_thick.jpg';
                  document.getElementById("img_parent").appendChild(create_img);
                }
            }
            if(soup=="salt"){
                if(noodle.search("thin")!== -1){
                  console.log("yer")
                  var create_img = document.createElement('img');
                  create_img.id = 'create';
                  create_img.src = '../static/miso_thin.jpg';
                  document.getElementById("img_parent").appendChild(create_img);
               }
            }
            if(soup=="shoyu"){
                if(noodle.search("thick")!== -1){
                  console.log("yer")
                  var create_img = document.createElement('img');
                  create_img.id = 'create';
                  create_img.src = '../static/shoyu_thick.jpg';
                  document.getElementById("img_parent").appendChild(create_img);
               }
            }
        }

        function sentData() {
            var data = {
                "soup": soup,
                "noodle": noodle,
                "thickness": thickness
            }
            var hostUrl = location.href + "/serch"

            console.log(data);
            $.ajax({
                url: hostUrl,
                type: "post",
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(data),
                timeout: 3000,
                success: function (result) {
                    console.log(result);
                    location.href = "/serchResult"
                }
            });
        }
