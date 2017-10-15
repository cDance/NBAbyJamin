$.ajax({
    url: 'ajaxnba.json',
    type :'GET',
    success: function(res){
//        console.log(res);  
        var NbaTeam = res.data.NbaTeam;
        var goodsDOM = []; //定义一个新数组
        for(var i=0; i<NbaTeam.length; i++){
            var html = "<tr><td class='gray1 gray2 bold'>" + NbaTeam[i].num +"</td>" +
                       "<td class='team-name'>"+"<img"+" "+ ' '+"class='team-icon'"+' '+'src='+NbaTeam[i].iurl+" "+"/>" + NbaTeam[i].name +"</td>" +
                       "<td>" + NbaTeam[i].win +"</td>" +"<td>" + NbaTeam[i].lose +"</td>"+
                       "<td>" + NbaTeam[i].dis +"</td></tr>";  
            goodsDOM.push(html); 
            
        }
        $('#oTable').append(goodsDOM); 
        $('#oTable tr:odd').addClass("gray");
        $('#oTable tr:even').find('td').removeClass("gray2");
        $("#oTable tr:eq(7)").addClass("blue-border");
        
    },
    error: function(res){
        alert("请求失败,请检查你的网络设置");
    },
    });
