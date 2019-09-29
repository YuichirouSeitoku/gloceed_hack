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

        function sentData() {
            var data = {
                "soup": soup,
                "noodle": noodle,
                "thickness": thickness
            }
            var hostUrl = location.href+"/serch"
            
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
                    location.href="/serchResult"
                }
            });
        }
