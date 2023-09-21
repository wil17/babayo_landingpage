//Nomer6//
function handleGetFormData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;
    var zipCode = document.getElementById('zip-code').value;
    var status = document.getElementById('status').checked;

    return {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status
    };
}

//Nomer7//
function isNumber(inputString) {
    for (var i = 0; i < inputString.length; i++) {
        if (isNaN(inputString[i])) {
            return false;
        }
    }
    return true;
}

//nomer8//
function checkboxIsChecked() {
    var checkbox = document.getElementById('status');
    return checkbox.checked;
}


document.getElementById('submit-form').addEventListener('click', function(event) {
    event.preventDefault(); 

    var zipCode = document.getElementById('zip-code').value;
    var isChecked = checkboxIsChecked();
    
    if (!isNumber(zipCode)) {
        alert('Kode pos hanya menerima angka saja');
        return; 
    }

    if (!isChecked) {
        alert('Periksa kembali input field anda!');
        return; 
    }

    var formData = handleGetFormData();
    console.log(formData); 
});

//nomer9//
function validateFormData(formData) {
    if (
      formData.name &&
      formData.email &&
      formData.city &&
      isNumber(formData.zipCode) &&
      checkboxIsChecked(formData.status)
    ) {
      return true;
    } else {
      return false;
    }
  }


//nomer10//

function submit() {
    const formData = handleGetFormData();
    if(validateFormData(formData))
    {
        document.getElementById('warning').textContent="";
    }
    else{
        document.getElementById('warning').textContent = "Periksa form anda sekali lagi";
    }
}

document.querySelector('form').addEventListener("submit",event=>{
    event.preventDefault();
    submit();
})