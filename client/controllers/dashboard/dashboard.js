UI.registerHelper("arrayify", function(obj){
    result = [];
    for (var key in obj){
        result.push({name:key,value:obj[key]});
    }
    return result;
});

UI.registerHelper("eq", function(one, two){
    return one == two;
});
