window.onload = function () {
    resolveEnvironment();
    var queueRenderer = getQueueRenderer();
    var uploaderExample1 = pu.getUploader({ maxParallelUploads: 2, autoStart: false, autoRemove: false }, {});
    var uploadSettings = {
        url: '/api/test',
        method: 'POST',
        maxFileSize: 1024,
        allowDragDrop: true,
        clickable: true,
        accept: '*.*',
        multiple: true
    };
    var queueUploadSettings = {
        url: '/api/test',
        method: 'POST',
        maxFileSize: 1024,
        allowDragDrop: true,
        clickable: false,
        accept: '*.*',
        multiple: true
    };
    var compatibilityForm = document.getElementById('example-compatibility-form');
    uploaderExample1.registerArea(document.getElementById('example-button'), uploadSettings, compatibilityForm);
    uploaderExample1.registerArea(document.getElementById('example-dnd-area'), uploadSettings);
    uploaderExample1.registerArea(document.getElementById('example-queue'), queueUploadSettings);
    uploaderExample1.queue.callbacks.onQueueChangedCallback = function (result) {
        queueRenderer.renderQueue('example-queue', 'Example Queue', result, uploaderExample1.queue.options);
    };
    uploaderExample1.queue.callbacks.onProgressCallback = function (file) {
        queueRenderer.renderItemProgress('example-queue', file);
    };
    pu.addEventHandler(document.getElementById('example-clear-button'), 'click', function () { return uploaderExample1.queue.clearFiles(); });
};
