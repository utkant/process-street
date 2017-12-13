'use strict';

describe('myApp.fileUploader.component module', function () {
    beforeEach(module('myApp'));

    beforeEach(module('templates'));
    
    describe('fileUploader component', function () {
        var scope, element;
        
        it('should exist', inject(function ($rootScope, $componentController, $compile) {
            scope = $rootScope.$new();
            element = angular.element('<file-uploader></file-uploader>');
            scope.$apply(function () {
                $compile(element)(scope);
            });
            var fileUploaderComponent = $componentController('fileUploader', {$scope: scope, $element: element});
            
            expect(fileUploaderComponent).toBeDefined();
        }));

        it('should expose classes', function () {
            expect(scope.classes).toBeDefined();
            expect(scope.classes.progress).toBeDefined();
            expect(scope.classes.fileSelect).toBeDefined();
            expect(scope.classes.player).toBeDefined();
            expect(scope.classes.progress).toBe('hidden');
            expect(scope.classes.fileSelect).toBe('');
            expect(scope.classes.player).toBe('hidden');
        });
        
        it('should expose progress', function () {
            expect(scope.progress).toBeDefined();
            expect(scope.progress).toBe(0);
        });
        
        it('should expose addFn function', function () {
            expect(scope.addFn).toBeDefined();
            expect(typeof scope.addFn).toBe('function');
        });
        
        it('should expose doneFn function', function () {
            expect(scope.doneFn).toBeDefined();
            expect(typeof scope.doneFn).toBe('function');
        });
        
        it('should expose progressFn function', function () {
            expect(scope.progressFn).toBeDefined();
            expect(typeof scope.addFn).toBe('function');
        });
        
        describe('addFn function', function () {
            var data;
            beforeEach(function () {
                data = {
                    submit: function () {}
                };
                spyOn(data, 'submit');
                spyOn(scope, '$apply');
                scope.addFn('', data);
            });
            it('should change classes', function () {
                expect(scope.classes.fileSelect).toBe('hidden');
                expect(scope.classes.progress).toBe('');
            });
            
            it('should call scope.$apply()', function () {
                expect(scope.$apply).toHaveBeenCalled();
            });
            
            it('should call data.submit()', function () {
                expect(data.submit).toHaveBeenCalled();
            });
        });
        
        describe('doneFn function', function () {
            var data;
            beforeEach(function () {
                data = {
                    result: {
                        hashed_id: '123fjfjgj'
                    }
                };
                spyOn(scope, '$apply');
                scope.doneFn('', data);
            });
            it('should change classes', function () {
                expect(scope.classes.progress).toBe('hidden');
                expect(scope.classes.player).toBe('');
            });
            
            it('should set scope.videoId', function () {
                expect(scope.videoId).toBe(data.result.hashed_id);
            });
            
            it('should call scope.$apply()', function () {
                expect(scope.$apply).toHaveBeenCalled();
            });
        });
        
        describe('progressFn function', function () {
            var data;
            beforeEach(function () {
                data = {
                    loaded: 1000,
                    total: 10000
                };
                spyOn(scope, '$apply');
                scope.progressFn('', data);
            });
            
            it('should set scope.progress during upload', function () {
                expect(scope.progress).toBe(10);
            });
            
            it('should call scope.$apply()', function () {
                expect(scope.$apply).toHaveBeenCalled();
            });
        });
    });
});