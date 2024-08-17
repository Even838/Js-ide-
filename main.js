    function exe() {
      
      const código = document.getElementById('código').value;
;
      const resultado = eval(código);
      
      
      
      
      document.getElementById('saída').innerHTML = resultado ;
      
      
    }  
    function lib() {
    window.location.href="/biniotecas.HTML"
    }
    
    document.getElementById('lib').addEventListener('click',  lib);
    
    
    document.getElementById('exe').addEventListener('click', exe);


const editor = CodeMirror.fromTextArea(código, {
    lineNumbers: true, 
    mode: 'javascript', 
    theme: 'Solarized Light'
});

