
function setup_autocomplete(e) {
    var e = $(e);
    
    var name = e.attr('ac_name');
    var type = e.attr('ac_type');
    var property = e.attr('ac_property');
    var limit = e.attr("ac_limit");
    
    e.autocomplete("/getthings", {
        extraParams: {
            type: type,
            property: property
        }, 
        matchCase: true,
        max: limit,
        formatItem: function (row) {
            if (property == "key") 
                return row[0];
            else
                return "<div>" + row[0] + "<br/><div style='font-size: 0.8em;'>" + row[1] + "</div></div>";
	    }
    })
    .result(function(event, data, formatted) {
        $(document.getElementById('result_' + name)).val(data[1])
    });
}