import { Component, OnInit, Injectable , Inject , PLATFORM_ID } from '@angular/core';
import { LoginService } from '../_services/index';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogin = false;
  isAdmin = true;
  constructor(private loginService: LoginService,
     @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: Object) {
      if (isPlatformBrowser(this.platformId)) {
    setTimeout(() => {
      this.isLogin = loginService.getCookie('userDetails') ? true : false;
      this.isAdmin = loginService.getCookie('isAdmin') == 'true';

      var stickyOffset = $('.nav-stick').offset().top;
      $(window).scroll(function () {
        var sticky = $('.nav-stick'), scroll = $(window).scrollTop();
        if (scroll >= stickyOffset) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
    }, 3000);
  }
  }
  logout() {
    if (isPlatformBrowser(this.platformId)) {
    this.loginService.eraseCookie("userDetails");
    this.loginService.eraseCookie("userName");
    this.loginService.eraseCookie("isAdmin");
    window.location.href = "/";
    }
  }

  ngOnInit() {
  }

}
