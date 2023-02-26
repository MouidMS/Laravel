<?php

namespace App\Http\Controllers;
require_once('vendor/autoload.php');


use Illuminate\Http\Request;
use PhpOffice\PhpWord\Exception\Exception;
use PhpOffice\PhpWord\IOFactory;
use PhpOffice\PhpWord\Settings;
use PhpOffice\PhpWord\Writer\PDF;
use Dompdf\Dompdf;
use Aspose\Words\WordsApi;
use Aspose\Words\Model\Requests\ConvertDocumentRequest;





class DocumentController extends Controller
{


    public function convertDocToPDF(){

        /*
        $domPdfPath = base_path('vendor/dompdf/dompdf');
        \PhpOffice\PhpWord\Settings::setPdfRendererPath($domPdfPath);
        \PhpOffice\PhpWord\Settings::setPdfRendererName('DomPDF');
        $Content = \PhpOffice\PhpWord\IOFactory::load(public_path('sample.docx'));
        $PDFWriter = \PhpOffice\PhpWord\IOFactory::createWriter($Content,'PDF');
        $PDFWriter->save(public_path('doc-pdf.pdf'));
        echo 'File has been successfully converted';

*/


        $wordsApi = new WordsApi('DWOVUywM38YsV5Z3', '310897373');

        $doc = public_path('sample.docx');
        $request = new ConvertDocumentRequest(
            $doc, "pdf", NULL, NULL, NULL, NULL
        );
        $convert = $wordsApi->convertDocument($request);

        echo 'File has been successfully converted';
    }


}
