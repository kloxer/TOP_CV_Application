import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import DisplayResume from "./resume.jsx";

function PdfDownload() {
  const generatePdf = () => {
    const input = document.getElementById("resume");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf");
    });
  };

  return (
    <div>
      <button class="addMore download" onClick={generatePdf}>
        Download PDF
      </button>
    </div>
  );
}

export default PdfDownload;
