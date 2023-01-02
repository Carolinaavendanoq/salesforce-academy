/**
 * La función envía un correo electrónico con el correo electrónico del candidato como asunto y el CV
 * adjunto

function sendEmail() {
    const correoCandidato = document.getElementById("email").value;
    console.log(correoCandidato);
    const cvfile = document.getElementById("archivo").value;
    console.log(cvfile);
    const cvfileName = document.getElementById("archivo").name;
    console.log(cvfileName);
	Email.send({
	Host: "smtp.gmail.com",
	Username : "academyevolution2022@gmail.com",
	Password : "academy2022",
	To : "correo_hoja_de_vida@b-2kn1bu52lj69zmwob9i9ulqebwufwqh5xyyqb500glhivuxt2u.dn-4lt5ymas.na224.apex.salesforce.com",
	From : "academyevolution2022@gmail.com",
	Subject : `${correoCandidato}`,
	Body : "Hoja de vida adjunta de nuevo candidato",
    Attachments : [
        {
            name: `${cvfileName}`,
            path: `${cvfile}`
        }
    ]
	}).then(
		message => alert("mail sent successfully")
	);
}
 */