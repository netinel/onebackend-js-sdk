/**
 * OneBackend JavaScript SDK
 */

(function(root){

    root.OneBackend = root.OneBackend || {};
    var OneBackend = root.OneBackend;

    OneBackend.initialize = function(applicationId){
        OneBackend.applicationId = applicationId;
    };

})(this);