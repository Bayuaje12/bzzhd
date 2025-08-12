document.addEventListener('DOMContentLoaded', function() {
    // Elemen DOM
    const dropArea = document.getElementById('dropArea');
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('previewContainer');
    const originalImage = document.getElementById('originalImage');
    const enhancedImage = document.getElementById('enhancedImage');
    const slider = document.getElementById('slider');
    const enhanceBtn = document.getElementById('enhanceBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const resetBtn = document.getElementById('resetBtn');
    const loadingModal = document.getElementById('loadingModal');
    
    // Kontrol peningkatan
    const sharpnessControl = document.getElementById('sharpness');
    const brightnessControl = document.getElementById('brightness');
    const contrastControl = document.getElementById('contrast');
    const noiseControl = document.getElementById('noise');
    
    let currentFile = null;
    let enhancedImageData = null;
    