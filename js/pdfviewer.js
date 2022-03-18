const pdfs = document.querySelectorAll(".pdfs object");
const images = document.querySelectorAll(".gridwrapper object");
const modal = document.querySelector(".modal");
const modalpdf = document.querySelector(".modalpdf");
const close = document.querySelector(".close");

$('#Mymodal').on('hidden.bs.modal', function () {
    location.reload();
})

images.forEach((image) => {
    
    image.addEventListener("click", () => {

        let imgname = image.getAttribute("name");
        
        console.log(imgname);
        
        pdfs.forEach((pdf) => {
            if(pdf.name == imgname){
                console.log(modalpdf.data);
                console.log(pdf.data);
                $(".modalpdf").attr({
                    data: pdf.data
                });
                console.log("found" + pdf.name);
                
            }
            $('#Mymodal').modal('show');
        });

    });
});

