angular.module('myApp').component('fileUploader', {
    templateUrl: 'components/fileUploader.component.html',
    controller: function ($scope, $element) {
        // Classes that shows/hides the correct content.
        $scope.classes = {
            progress: 'hidden',
            fileSelect: '',
            player: 'hidden'
        };
        
        // Initial progress set to zero
        $scope.progress = 0;
        
        // Function that is run when user selects file.
        $scope.addFn = function (e, data) {
            $scope.classes.progress = '';
            $scope.classes.fileSelect = 'hidden';
            $scope.$apply();
            data.submit();
        };
        
        // Function that is run when the file is finished uploading.
        $scope.doneFn = function (e, data) {
            $scope.classes.progress = 'hidden';
            $scope.classes.player = '';
            $scope.videoId = data.result.hashed_id;
            $scope.$apply();
        };
        
        // Function that is run while uploading. Updates the progress bar.
        $scope.progressFn = function (e, data) {
            if (data.loaded > 0 && data.total > 0) {
                $scope.progress = parseInt(data.loaded / data.total * 100, 10);            
            } else {
                $scope.progress = 0;
            }

            $('.progress .bar').css('width', $scope.progress + '%');
            $scope.$apply();
        };
        
        // Sets up the jQuery file upload plugin.
        $($element.find('input[type="file"]')).fileupload({
            dataType: 'json',
            multiple: false,
            add: $scope.addFn,
            done: $scope.doneFn
        });
        
        // Adds progress bar updates while uploading to the jQuery file upload plugin.
        $($element.find('input[type="file"]')).bind('fileuploadprogress', $scope.progressFn);
    }
});