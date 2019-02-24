// The file upload is inspired by
// https://stackoverflow.com/questions/48578954/angular-4-5-material-raised-button-with-input-file
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-file',
  templateUrl: './read-file.component.html',
  styleUrls: ['./read-file.component.css']
})
export class ReadFileComponent implements OnInit {
  fileType: string = "md"
  @Output() result: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  openInput() {
    document.getElementById("fileInput").click();
  }

  handleFileInput(files: FileList) {
    // Inspired by: https://stackoverflow.com/questions/40146768/how-filereader-readastext-in-html5-file-api-works
    let file = files.item(0); // We only read the first file
    let result = this.result; // we get error if we don't do this?

    if (file && file.name.substr(file.name.length - 3) == "." + this.fileType) {
      var reader = new FileReader();
      reader.onload = function (e) {
        console.log("File read")
        console.log(reader.result)
        result.emit(reader.result.toString());
      }
      // reader.onerror = function (err) {
      //   console.log(err, err.loaded
      //     , err.loaded === 0
      //     , file);
      // }

      reader.readAsText(file);
    }
  }
}
