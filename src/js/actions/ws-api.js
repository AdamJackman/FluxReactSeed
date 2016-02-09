export default {

    function httpGet( url, actionPath){
        $.ajax({
            url: url + actionPath,
            success: function(data) {
                ServerActionCreators.receiveData(data);
            },
            error: function(xhr, status, err) {
                ServerActionCreators.receiveAPIError({ err: err });
            }
        });
    }
            
    function httpPost( url, actionPath ){
        $.ajax({
            url: url + actionPath,
            success: function(data) {
                ServerActionCreators.receiveData(data);
            },
            error: function(xhr, status, err) {
                ServerActionCreators.receiveAPIError({ err: err });
            }
        });
    }
}