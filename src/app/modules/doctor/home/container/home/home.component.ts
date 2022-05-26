import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  approved = [
    { name: "Munive", date: "12-04-2022", text: "Ad nostrud dolore magna excepteur sit qui reprehenderit elit ad fugiat Lorem aute. Fugiat nulla cillum enim irure id magna ea eiusmod. Enim exercitation anim officia amet labore ad. Eiusmod tempor dolor occaecat quis incididunt aute. Tempor sunt aliquip fugiat ipsum ea minim quis fugiat. Sint ea veniam irure cillum ea sint Lorem ad.Id nulla commodo nisi est officia reprehenderit irure aliqua quis duis deserunt fugiat ad tempor." },
    { name: "Daniel", date: "10-03-2022", text: "Cillum Lorem anim adipisicing est ullamco do. Aute cupidatat Lorem nulla anim proident nostrud ullamco mollit. Duis esse non enim do et magna cillum aliqua est nisi incididunt laboris eiusmod. Est officia reprehenderit in enim ipsum consequat eiusmod ut nulla dolor dolor. Incididunt laboris consequat ad sunt sunt consequat qui. Aliquip nisi cillum eiusmod officia eiusmod ex laboris pariatur in in aliqua nulla." },
    { name: "Jose", date: "4-03-2022", text: "Aliqua eu in officia tempor. Enim minim sit ipsum aute. Eu cillum non tempor enim ipsum non ad cupidatat cupidatat officia velit. Anim Lorem consectetur pariatur consequat nulla in sint non." },
    { name: "Jose", date: "4-03-2022", text: "Aliqua eu in officia tempor. Enim minim sit ipsum aute. Eu cillum non tempor enim ipsum non ad cupidatat cupidatat officia velit. Anim Lorem consectetur pariatur consequat nulla in sint non." },
    { name: "Jose", date: "4-03-2022", text: "Aliqua eu in officia tempor. Enim minim sit ipsum aute. Eu cillum non tempor enim ipsum non ad cupidatat cupidatat officia velit. Anim Lorem consectetur pariatur consequat nulla in sint non." },
    
  ];

  pending = [
    { name: "Munive", date: "12-04-2022", text: "Ad nostrud dolore magna excepteur sit qui reprehenderit elit ad fugiat Lorem aute. Fugiat nulla cillum enim irure id magna ea eiusmod. Enim exercitation anim officia amet labore ad. Eiusmod tempor dolor occaecat quis incididunt aute. Tempor sunt aliquip fugiat ipsum ea minim quis fugiat. Sint ea veniam irure cillum ea sint Lorem ad.Id nulla commodo nisi est officia reprehenderit irure aliqua quis duis deserunt fugiat ad tempor." },
    { name: "Daniel", date: "10-03-2022", text: "Cillum Lorem anim adipisicing est ullamco do. Aute cupidatat Lorem nulla anim proident nostrud ullamco mollit. Duis esse non enim do et magna cillum aliqua est nisi incididunt laboris eiusmod. Est officia reprehenderit in enim ipsum consequat eiusmod ut nulla dolor dolor. Incididunt laboris consequat ad sunt sunt consequat qui. Aliquip nisi cillum eiusmod officia eiusmod ex laboris pariatur in in aliqua nulla." },
    { name: "Jose", date: "4-03-2022", text: "Aliqua eu in officia tempor. Enim minim sit ipsum aute. Eu cillum non tempor enim ipsum non ad cupidatat cupidatat officia velit. Anim Lorem consectetur pariatur consequat nulla in sint non." }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
