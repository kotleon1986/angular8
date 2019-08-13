import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  tiles: any[] = [
    {
      text: "One"
    },
    {
      text: "Two"
    },
    {
      text: "Three"
    },
    {
      text: "Four"
    },
    {
      text: "Five"
    },
    {
      text: "Six"
    },
    {
      text: "Seven"
    },
    {
      text: "Eight"
    },
    {
      text: "Nine"
    },
    {
      text: "Ten"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
