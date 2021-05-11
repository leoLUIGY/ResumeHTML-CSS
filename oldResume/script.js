function generatePDF(){
    const element = document.getElementById("AllContent");

    html2pdf().from(element)
    .save();
}