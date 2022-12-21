import { NgModule } from "@angular/core";
import { NgxTinymceModule, TinymceOptions } from "ngx-tinymce";

/*
funciona con TYPESCRIPT "~4.7.2"
*/


// tinymce configuration
const options: TinymceOptions = {
    baseURL: './assets/tinymce/',
    config: {
        height: '500',
        language: 'es',
        // theme: "modern",
        // powerpaste advcode toc tinymcespellchecker a11ychecker mediaembed linkchecker help
        plugins:
          'preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount',
        toolbar:
          'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
        image_advtab: true,
        imagetools_toolbar:
          'rotateleft rotateright | flipv fliph | editimage imageoptions',
        templates: [
          { title: 'Test template 1', content: 'Test 1' },
          { title: 'Test template 2', content: 'Test 2' },
        ],
        content_css: [
          '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
          '//www.tinymce.com/css/codepen.min.css',
        ],
    }
}

@NgModule({
    declarations: [],
    imports: [NgxTinymceModule.forRoot(options)],
    exports: [NgxTinymceModule]
})
export class CustomTinymceModule { }
