function update(value) {
 
    document.form.screen.value += value;
  
  }
  
  function result(value) {
    document.form.screen.value = eval(document.form.screen.value);
  }
  
  function reset() {

    document.form.screen.value = value;
  }