function emailDetails(){

    var EmailAddress = document.getElementById("txtemail").value;


    var emailpart = EmailAddress.substring(0,EmailAddress.indexOf("@"));

    var domainpart = EmailAddress.substring(EmailAddress.indexOf("@")+1);

    document.getElementById("txtpart").value = emailpart;

    document.getElementById("txtdomain").value = domainpart;

}