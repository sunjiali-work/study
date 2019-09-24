var baseUrl = "http://localhost:3030";
var requests = {
    getHeader: function (callback) {
        $.ajax({
            method: "get",
            url: baseUrl + "/header.html",
            success: function (result) {
                callback(result);
            }
        });
    },
    getFooter: function (callBack) {
        $.ajax({
            url: baseUrl + "/footer.html",
            method: 'get',
            success: function (result) {
                callBack(result);
            }
        });
    }
}

