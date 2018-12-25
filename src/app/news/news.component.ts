import { Component, OnInit, OnChanges, OnDestroy, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { ApiService, ENDPOINT } from './../core/service/api.service';
import { LoggerService } from '../core/service/logger.service';

export interface Product {
  name: string;
  price: string;
  image: string;
  desc: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @ViewChildren('li') li: QueryList<any>;

  @ViewChild('getelm') getelm: ElementRef;

  item = [
    {
      img: 'asdad',
      title: 'adassadasd',
      desc: 'lorem in dolor',
      url: '/asasd'
    },
    {
      img: 'asdad',
      title: 'adassadasd',
      desc: 'lorem in dolor',
      url: '/asasd'
    }
  ];

  productList: any;

  input: any;
  sendValue: string;
  getDataChild: string;
  btnLoad = true;


  constructor(
    private _api: ApiService,
    private _looger: LoggerService
  ) { }

  ngOnInit() {
    // this._api.getConsole().subscribe(data => console.log(data));
    // this._api.get(ENDPOINT.users).subscribe(data => console.log(data));

    this._api.getFileContent('assets/file.txt').subscribe(data => console.log(data));

    this._api.post(ENDPOINT.register, {
      'email': 'dong@gmail.com',
      'password': 'pistol'
    }).subscribe((data: any) => {
      // console.log(data);
    });

    this._looger.warn('asd');
  }

  showDetail(data: any) {
    this.input = data;
  }

  ngOnChanges(data) {
    // console.log('asd');
  }

  ngOnDestroy() {
    // console.log('news destroy');
  }

  listenChild(e) {
    this.sendValue += e;
  }

  ngAfterViewInit() {
    this.li.forEach(lii => {
      console.log(lii.nativeElement);
      lii.nativeElement.addEventListener('click', () => {
        console.log('ok');
      });
    });

    console.log(this.getelm.nativeElement);
    this.getelm.nativeElement.style.color = 'red';
  }

}
